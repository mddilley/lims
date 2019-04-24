import React, { Component } from 'react'

class SamplesInput extends Component {
  constructor(){
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: 0,
    }
  }

  handleChange = (event) => {
    const state = {}
    state[event.target.name] = event.target.value
    this.setState(state)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addSample(this.state)
  }

  render(){
    return(
      <div className="outline">
        <form onSubmit={this.handleSubmit}>
          <label>Sample Patient First Name:</label>
          <input type="text" name="firstName" onChange={this.handleChange}/><br/>
          <label>Sample Patient Last Name:</label>
          <input type="text" name="lastName" onChange={this.handleChange}/><br/>
          <label>Sample Patient Age:</label>
          <input type="text" name="age" onChange={this.handleChange}/><br/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default SamplesInput;
