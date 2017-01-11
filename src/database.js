let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/workouts')

let db = mongoose.connection

db.once('open', err => {
  if (err) {
    console.log(err)
  }
  console.log('MONGO READY')
})

db.on('error', err => console.log('Database error' + err))
module.exports = db
