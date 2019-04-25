import React, { Component } from 'react'
import cuid from 'cuid';
export const cuidFn = cuid;
const snakeCaseKeys = require('snakecase-keys')

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
    fetch('http://localhost:4000/batches',{
      method: 'POST',
      body: JSON.stringify(snakeCaseKeys({batch: batch.attributes})),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.props.addBatch(batch)
  }

  render(){
    return(
      <div className="outline">
        <form onSubmit={this.handleSubmit}>
          <label>Batch Creator:</label>
          <input type="text" name="creator" onChange={this.handleChange}/><br/>
          <label>Batch Date:</label>
          <input type="date" name="date" onChange={this.handleChange}/><br/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BatchInput;
