import React, { Component } from 'react'

class BatchInput extends Component {
  constructor(){
    super()
    this.state = {
      creator: "",
      date: ""
    }
  }

  render(){
    return(
      <div className="outline">
        <form>
          <label>Batch Creator:</label>
          <input type="text" /><br/>
          <label>Batch Date:</label>
          <input type="date" /><br/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BatchInput;
