import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import cuid from 'cuid';
export const cuidFn = cuid;

class BatchInput extends Component {
  constructor(){
    super()
    this.state = {
      creator: "",
      date: "",
    }
  }

  handleChange = (event) => {
    const state = {}
    state[event.target.name] = event.target.value
    this.setState(state)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const batch = {}
    batch["attributes"] = {...this.state, batchCuid: cuid()}
    this.props.postBatches(batch)
  }

  render(){
    return(
      <div>
        <h2>Create a New Batch</h2>
        <Container className="white-background">
          <br/>
          <form onSubmit={this.handleSubmit}>
            <label>Batch Creator:</label>
            <input type="text" name="creator" onChange={this.handleChange}/><br/>
            <label>Batch Date:</label>
            <input type="date" name="date" onChange={this.handleChange}/><br/>
            <input className="btn btn-success" type="submit" />
          </form>
        </Container>
      </div>
    )
  }
}

export default BatchInput;
