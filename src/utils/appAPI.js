var AppActions = require('../actions/AppActions')
import axios from 'axios'
module.exports = {
  addWorkout: function (workout) {
    return axios.post('/api/workouts/add', {
      workout: workout
    })
  },
  getWorkouts: function () {
    return axios.get('/api/workouts', {

    }).then(workouts => {
      AppActions.receiveWorkouts(workouts.data)
    })
  },
  removeWorkout: function (id) {
    return axios.delete('/api/workouts/delete/' + id, {

    })
  }
}
