import React, { Component } from 'react'

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

  render(){
    return(
      <div className="outline">
        <form>
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
