const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

let mongoose = require('mongoose')
mongoose.Promise = global.Promise

let Workout = require('./Models/Workout')

let db = require('./database')

app.set('port', process.env.PORT || 3001)

app.use('/', express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/workouts', (req, res) => {
  Workout.find({}).then(workouts => {
    res.send(JSON.stringify(workouts))
  })
})

app.post('/api/workouts/add', (req, res) => {
  let workout = {
    id: req.body.workout.id,
    type: req.body.workout.type,
    minutes: req.body.workout.minutes,
    miles: req.body.workout.miles,
    date: req.body.workout.date

  }
  Workout.create(workout).then(workout => {
    res.send()
  })
})

app.delete('/api/workouts/delete/:id', (req, res) => {
  let id = req.params.id
  Workout.findOneAndRemove({id: id}).then((err) => {
    if (err) {
      console.log(err)
    }
    res.end()
  })
})

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`)
})
