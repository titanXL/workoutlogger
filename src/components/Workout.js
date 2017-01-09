var React = require('react')
var AppActions = require('../actions/AppActions')
var Workout = React.createClass({
  render: function () {
    let miles = this.props.workout.miles
    if (miles) {
      miles = ' | ' + miles + ' miles '
    }
    return (
      <li className='list-group-item'>
        {this.props.workout.type} -
        {this.props.workout.minutes} Minutes
        {miles}
        <a href='#' className='delete' onClick={this.onDelete.bind(this, this.props.workout.id)}>x</a>
      </li>
    )
  },
  onDelete: function (id, j) {
    AppActions.removeWorkout(id)
  }
})

module.exports = Workout
