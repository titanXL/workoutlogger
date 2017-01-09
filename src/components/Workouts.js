var React = require('react')
let Workout = require('./Workout.js')
var Workouts = React.createClass({
  render: function () {
    return (
      <ul className='list-group'>
        {this.props.workouts.map((workout, i) => {
          return <Workout workout={workout} key={i} />
         })}
      </ul>
    )
  }
})

module.exports = Workouts
