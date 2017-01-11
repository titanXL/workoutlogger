let mongoose = require('mongoose')

let workoutSchema = mongoose.Schema({
  id: {type: Number},
  type: {type: String, required: true},
  minutes: {type: Number, required: true},
  miles: {type: Number},
  date: {type: Date}
})

module.exports = Workout = mongoose.model('Workout', workoutSchema)
