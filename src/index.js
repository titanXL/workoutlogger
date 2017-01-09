import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'
let AppAPI = require('./utils/appAPI.js')
let startData = require('./startData.js')
if (localStorage.getItem('workouts') == null) {
  startData.init()
}
AppAPI.getWorkouts()
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
