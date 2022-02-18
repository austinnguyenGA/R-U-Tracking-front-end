//this will create a new post to include the review.
import React, { Component } from 'react'

export default class WONewForm extends Component {
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
            <label htmlFor="exercise">Exercise: </label>
            <input type="text" placeholder="What's the exercise??" id="exercise" name="exercise" onChange={ (e) => this.handleChangeEvent(e) } value={this.state.event}/>
            <input type="submit" value="Add Exercise Post"/>
        </form>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="sets">Sets: </label>
            <input type="text" placeholder="How many sets?" id="sets" name="sets" onChange={ (e) => this.handleChangeTime(e) } value={this.state.time}/>
            
        </form>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="reps">Goal:</label>
            <input type="text" placeholder="How many reps?" id="reps" name="reps" onChange={ (e) => this.handleChangeGoal(e) } value={this.state.goal}/>
        </form>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="duration">Reflection: </label>
            <input type="text" placeholder="What is the duration?" id="duration" name="duration" onChange={ (e) => this.handleChangeReflection(e) } value={this.state.reflection}/>
        </form>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="date">date: </label>
            <input type="text" placeholder="What was the date?" id="date" name="date" onChange={ (e) => this.handleChangeVideo(e) } value={this.state.video}/>
        </form>
      
      </div>  

    )
  }
}

