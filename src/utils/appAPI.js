var AppActions = require('../actions/AppActions')
module.exports = {
  addWorkout: function (workout) {
    let workouts = JSON.parse(localStorage.getItem('workouts'))
    workouts.push(workout)
    localStorage.setItem('workouts', JSON.stringify(workouts))
  },
  getWorkouts: function () {
    let workouts = JSON.parse(localStorage.getItem('workouts'))
    AppActions.receiveWorkouts(workouts)
  },
  removeWorkout: function (id) {
    let workouts = JSON.parse(localStorage.getItem('workouts'))
    for (let i = 0; i < workouts.length; i++) {
      if (workouts[i].id === id) {
        workouts.splice(i, 1)
      }
    }
    localStorage.setItem('workouts', JSON.stringify(workouts))
  }
}
