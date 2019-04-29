import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import cuid from 'cuid';
export const cuidFn = cuid;

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
    const sample = {}
    sample["attributes"] = {...this.state, sampleCuid: cuid()}
    this.props.postSample(sample) //NEED BATCHID ASSIGNED
  }

  render(){
    return(
      <div>
        <Container className="white-background">
        <br/>
          <h2>Add New Sample to Batch</h2>
          <form onSubmit={this.handleSubmit}>
            <label>Sample Patient First Name:</label>
            <input type="text" name="firstName" onChange={this.handleChange}/><br/>
            <label>Sample Patient Last Name:</label>
            <input type="text" name="lastName" onChange={this.handleChange}/><br/>
            <label>Sample Patient Age:</label>
            <input type="text" name="age" onChange={this.handleChange}/><br/>
            <input className="btn btn-success" type="submit" />
          </form>
        </Container>
      </div>
    )
  }
}

export default SamplesInput;
