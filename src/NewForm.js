//this will create a new post to include the review.
import React, { Component } from 'react'

export default class NewForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      event: '',
      time: '',
      goal: '',
      reflection: '',
      video: '',
      modalOpen: false
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.props.baseUrl)
    // fetch to the backend
    fetch(this.props.baseUrl + "/swims", {
      method: 'POST',
      body: JSON.stringify({
          event: this.state.event,
          time: this.state.time,
          goal: this.state.goal,
          reflection: this.state.reflection,
          video: this.state.video
        }),
      headers: {
        'Content-Type': 'application/json'
      }, 
      credentials: 'include'
    }).then(res => {
      return res.json()
    }).then(data => {
      //console.log(data)
      this.props.addTravel(data)
      this.setState({
        event: '',
        time: '',
        goal: '',
        reflection: '',
        video: ''

      })
    })
  }

  handleChangeEvent = (event) => {
    // console.log(event.target.value)
    this.setState({
      event: event.target.value,
    })
  }
  handleChangeTime = (event) => {
    // console.log(event.target.value)
    this.setState({
      time: event.target.value,
    })
  }
  handleChangeGoal = (event) => {
    // console.log(event.target.value)
    this.setState({
      goal: event.target.value,
    })
  }
  handleChangeReflection = (event) => {
    // console.log(event.target.value)
    this.setState({
      reflection: event.target.value,
    })
  }
  handleChangeVideo = (event) => {
    // console.log(event.target.value)
    this.setState({
        video: event.target.value,
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="event">Event: </label>
            <input type="text" placeholder="What's the event??" id="event" name="event" onChange={ (e) => this.handleChangeEvent(e) } value={this.state.event}/>
            <input type="submit" value="Add New Race Post"/>
        </form>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="time">Time: </label>
            <input type="text" placeholder="What was your time?" id="time" name="time" onChange={ (e) => this.handleChangeTime(e) } value={this.state.time}/>
            
        </form>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="goal">Goal:</label>
            <input type="text" placeholder="What was your goal?." id="goal" name="goal" onChange={ (e) => this.handleChangeGoal(e) } value={this.state.goal}/>
        </form>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="reflection">Reflection: </label>
            <input type="text" placeholder="Reflection on the race here." id="reflection" name="reflection" onChange={ (e) => this.handleChangeReflection(e) } value={this.state.reflection}/>
        </form>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="video">Video: </label>
            <input type="text" placeholder="Enter video link here." id="video" name="video" onChange={ (e) => this.handleChangeVideo(e) } value={this.state.video}/>
        </form>
      
      </div>  

    )
  }
}

