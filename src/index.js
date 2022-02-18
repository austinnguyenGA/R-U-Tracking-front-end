import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Show from './Show'
import Running from './Running'
import Swimming from './Swimming'
import App from './Nav'
import Workout from './Workouts'
import Trial from './SwimTrials'
import Trial1 from './TrackTrials'

ReactDOM.render(
  <React.StrictMode>
    {/* <Show /> */}
    <App />
    <br />
    <Swimming />
    <br />
    <Running />
    <br />
    <Workout />
    <br />
    <Trial />
    <br />
    <Trial1 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
