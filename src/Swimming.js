// child of show 
import React, {Component} from 'react'
import NewForm from './NewForm'


// let baseUrl = 'http://localhost:3001'
let baseUrl;

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:3001';
} else {
  // "https://fathomless-sierra-68956.herokuapp.com" in this case is the *API* url
  baseUrl = 'https://r-u-tracking-backend.herokuapp.com';
}

console.log('current base URL:', baseUrl)

class Swims extends Component {
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
      this.getSwim()
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
  
  
    getSwim = () => { //goes back to homepage
  
      fetch(baseUrl + "/swims", {
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
        this.setState({swims: data})
      })
    }
  
    addSwim = (newSwim) => {
      //update state with the new travel frm the NewForm Component
  
      const copySwims = [...this.state.swims]
      copySwims.push(newSwim)
      this.setState({
        travels: copySwims
      })
    }
  
    deleteSwim = (id) => { 
      console.log(id)
      fetch(baseUrl + '/swims/' + id, {
        method: 'DELETE',
        credentials: "include"
      }).then( res => {
        console.log(res);
        //if I checked for a 200 res code create.
        if(res.status === 200) {
          // console.log("here");
          const findIndex =
          this.state.swims.findIndex(swim  => swim._id === id)
          const copySwims = [...this.state.swims]
          copySwims.splice(findIndex, 1)
          this.setState({
            swims: copySwims
          })
        }
      })
    }
  
    handleSubmit = (e) => {
      e.preventDefault()
  
      fetch(baseUrl + '/swims/' + this.state.swimToBeEdited._id,{
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
        const findIndex = this.state.swims.findIndex(swim => swim._id === resJson.data._id)
        const copySwims = [...this.state.swims]
        copySwims[findIndex] = resJson.data
        this.setState({
          swims: copySwims,
          modalOpen: false
        })
      })
    }
  
    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  
    showEditForm = (swim) => {
      // console.log('I was clicked!');
      this.setState({
        modalOpen:true,
        event: swim.event,
        time: swim.time,
        goal: swim.goal,
        reflection: swim.reflection,
        video: swim.video,
        swimToBeEdited: swim
      })
    }
  
    //Component lifecycle
  
    componentDidMount() {
      this.getSwim()
    }
  
  
  
    render () {
      return (
        <div className="Swim">
          {/* <Nav loginUser={this.loginUser}
          register={this.register} /> */}
          <h1>Swims</h1>
          <NewForm baseUrl={baseUrl}
          addSwim={this.addSwim} />
       
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

  export default Swims