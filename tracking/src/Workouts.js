// child of show 
import React, {Component} from 'react'
import NewForm from './NewForm'


let baseUrl = 'http://localhost:3001'

class Workout extends Component {
    constructor(props){
      super(props)
  
      this.state = {
        travels:[],
        modalOpen: false,
        travelToBeEdited: {},
        Exercise:'',
        Sets:'',
        Reps: '',
        Duration: '',
        Date: ''
      }
    }
  
  
  
  loginUser = (e) => {
    e.preventDefault()
    fetch(baseUrl + '/users/login', {
      method: 'POST',
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: "include"
    }).then(res => res.json())
    .then(resJson => {
      console.log(resJson)
      this.getWorkout()
    })
  }
  
  
  register = (e) => {
    e.preventDefault()
    fetch(baseUrl + '/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(resJson => {
      console.log(resJson)
      // call getSwim to get all of the swims and refresh the page
    })
  }
  
  
    getWorkout = () => { //goes back to homepage
  
      fetch(baseUrl + "/exercises", {
        credentials: "include"
      })
      .then(res => {
        if(res.status === 200) {
          return res.json()
        } else {
          return []
        }
      }).then(data => {
        // console.log(data)
        this.setState({workouts: data})
      })
    }
  
    addWorkout = (newWorkout) => {
      //update state with the new travel frm the NewForm Component
  
      const copyWorkouts = [...this.state.workouts]
      copyWorkouts.push(newWorkout)
      this.setState({
        travels: copyWorkouts
      })
    }
  
    deleteWorkout = (id) => { 
      console.log(id)
      fetch(baseUrl + '/exercise/' + id, {
        method: 'DELETE',
        credentials: "include"
      }).then( res => {
        console.log(res);
        //if I checked for a 200 res code create.
        if(res.status === 200) {
          // console.log("here");
          const findIndex =
          this.state.workouts.findIndex(workout  => workout._id === id)
          const copyWorkouts = [...this.state.workouts]
          copyWorkouts.splice(findIndex, 1)
          this.setState({
            swims: copyWorkouts
          })
        }
      })
    }
  
    handleSubmit = (e) => {
      e.preventDefault()
  
      fetch(baseUrl + '/exercises/' + this.state.workoutToBeEdited._id,{
        method: 'PUT',
        body: JSON.stringify({
          exercise: e.target.exercise.value,
          sets: e.target.sets.value,
          reps: e.target.reps.value,
          duration: e.target.duration.value,
          date: e.target.date.value
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: "include"
      }).then(res => res.json())
      .then(resJson => {
        // console.log(resJson);
        const findIndex = this.state.workouts.findIndex(workout => workout._id === resJson.data._id)
        const copyWorkouts = [...this.state.workouts]
        copyWorkouts[findIndex] = resJson.data
        this.setState({
          workouts: copyWorkouts,
          modalOpen: false
        })
      })
    }
  
    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  
    showEditForm = (workout) => {
      // console.log('I was clicked!');
      this.setState({
        modalOpen:true,
        exercise: workout.exercise,
        sets: workout.sets,
        reps: workout.reps,
        duration: workout.duration,
        date: workout.video,
        workoutToBeEdited: workout
      })
    }
  
    //Component lifecycle
  
    componentDidMount() {
      this.getWorkout()
    }
  
  
  
    render () {
      return (
        <div className="Exercise">
          {/* <Nav loginUser={this.loginUser}
          register={this.register} /> */}
          <h1>Workout</h1>
          <NewForm baseUrl={baseUrl}
          addWorkout={this.addworkout} />
       
          {
            this.state.modalOpen &&
            <form onSubmit={this.handleSubmit}>
              <label>Exercise: </label>
              <input name="exercise" value={this.state.exercise} onChange={this.handleChange} /><br/>
              <label>Sets: </label>
              <input name="sets" value={this.state.sets} onChange={this.handleChange} /><br/>
              <label>Reps: </label>
              <input name="reps" value={this.state.reps} onChange={this.handleChange} /><br/>
              <label>Duration: </label>
              <input name="duration" value={this.state.duration} onChange={this.handleChange} /><br/>
              <label>Date: </label>
              <input name="date" value={this.state.date} onChange={this.handleChange} />
  
              <button>Submit</button>
              <button>Submit</button>
            </form>
          }
        </div>
      );
    }
  
  }

  export default Workout