var React = require('react')
var AppActions = require('../actions/AppActions')
var AppStore = require('../stores/AppStore')
var AddForm = require('./AddForm.js')
let Workouts = require('./Workouts.js')
function getAppState () {
  return {
    showForm: AppStore.getShowForm(),
    workouts: AppStore.getWorkouts()
  }
}

var App = React.createClass({
  getInitialState: function () {
    return getAppState()
  },
  componentDidMount: function () {
    AppStore.addChangeListener(this._onChange)
  },
  componentWillUnmount: function () {
    AppStore.removeChangeListener(this._onChange)
  },
  onShowFormClick: function (event) {
    event.preventDefault()
    AppActions.showForm()
  },
  render: function () {
    let form
    if (this.state.showForm) {
      form = <AddForm />
    } else {
      form = ''
    }
    return (
      <div>
        <h1 className='text-center page-header'>WorkoutLogger</h1>
        <a href='#' onClick={this.onShowFormClick} className='btn btn-primary btn-block'>Add Workout</a>
        <br />
        {form}
        <br />
        <Workouts workouts={this.state.workouts} />
        <br />
      </div>
    )
  },
  _onChange: function () {
    this.setState(getAppState())
  }
})

module.exports = App
