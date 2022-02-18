// child of show 
// child of show 
import React, {Component} from 'react'
import NewForm from './NewForm'


let baseUrl = 'http://localhost:3001'


class Runs extends Component {
    constructor(props){
      super(props)
  
      this.state = {
        travels:[],
        modalOpen: false,
        travelToBeEdited: {},
        Event:'',
        Time:'',
        Goal: '',
        Reflection: '',
        Video: ''
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
      this.getRun()
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
      // call getRun to get all of the runs and refresh the page
    })
  }
  
  
    getRun = () => { //goes back to homepage
  
      fetch(baseUrl + "/runs", {
        credentials: "include"
      })
      .then(res => {
        if(res.status == 200) {
          return res.json()
        } else {
          return []
        }
      }).then(data => {
        // console.log(data)
        this.setState({runs: data})
      })
    }
  
    addRun = (newRun) => {
      //update state with the new run fr0m the NewForm Component
  
      const copyRuns = [...this.state.runs]
      copyRuns.push(newRun)
      this.setState({
        travels: copyRuns
      })
    }
  
    deleteRun = (id) => { 
      console.log(id)
      fetch(baseUrl + '/runs/' + id, {
        method: 'DELETE',
        credentials: "include"
      }).then( res => {
        console.log(res);
        //if I checked for a 200 res code create.
        if(res.status === 200) {
          // console.log("here");
          const findIndex =
          this.state.runs.findIndex(run  => run._id === id)
          const copyRuns = [...this.state.runs]
          copyRuns.splice(findIndex, 1)
          this.setState({
            runs: copyRuns
          })
        }
      })
    }
  
    handleSubmit = (e) => {
      e.preventDefault()
  
      fetch(baseUrl + '/runs/' + this.state.runToBeEdited._id,{
        method: 'PUT',
        body: JSON.stringify({
            event: e.target.event.value,
            time: e.target.time.value,
            goal: e.target.goal.value,
            reflection: e.target.reflection.value,
            video: e.target.video.value
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: "include"
      }).then(res => res.json())
      .then(resJson => {
        // console.log(resJson);
        const findIndex = this.state.runs.findIndex(run => run._id === resJson.data._id)
        const copyRuns = [...this.state.runs]
        copyRuns[findIndex] = resJson.data
        this.setState({
          runs: copyRuns,
          modalOpen: false
        })
      })
    }
  
    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  
    showEditForm = (run) => {
      // console.log('I was clicked!');
      this.setState({
        modalOpen:true,
        event: run.event,
        time: run.time,
        goal: run.goal,
        reflection: run.reflection,
        video: run.video,
        runToBeEdited: run
      })
    }
  
    //Component lifecycle
  
    componentDidMount() {
      this.getRun()
    }
  
  
  
    render () {
      return (
        <div className="Run">
          {/* <Nav loginUser={this.loginUser}
          register={this.register} /> */}
          <h1>Runs</h1>
          <NewForm baseUrl={baseUrl}
          addRun={this.addRun} />
          
          {
            this.state.modalOpen &&
            <form onSubmit={this.handleSubmit}>
              <label>Event: </label>
              <input name="event" value={this.state.event} onChange={this.handleChange} /><br/>
              <label>Time: </label>
              <input name="time" value={this.state.time} onChange={this.handleChange} /><br/>
              <label>Goal: </label>
              <input name="Goal" value={this.state.goal} onChange={this.handleChange} /><br/>
              <label>Reflection: </label>
              <input name="reflection" value={this.state.reflection} onChange={this.handleChange} /><br/>
              <label>Video: </label>
              <input name="video" value={this.state.video} onChange={this.handleChange} />
  
              <button>Submit</button>
              <button>Submit</button>
            </form>
          }
        </div>
      );
    }
  
  }

  export default Runs