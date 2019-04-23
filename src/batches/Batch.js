import React, { Component } from 'react'

class Batch extends Component {

  handleClick = (event) => {
    this.props.deleteBatch(this.props.batch.batchId)
  }

  render(){
    const batch = this.props.batch
    return(
      <div className="outline">
        <p>Batch ID: {batch.batchId}</p>
        <p>Batch Date: {batch.date}</p>
        <p>Batch Creator: {batch.creator}</p>
        <button onClick={this.handleClick}>Delete</button>
      </div>
    )
  }
}

export default Batch;
