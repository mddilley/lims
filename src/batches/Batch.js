import React, { Component } from 'react'

class Batch extends Component {

  render(){
    const batch = this.props.batch
    return(
      <div className="outline">
        <p>Batch ID: {batch.batchId}</p>
        <p>Batch Date: {batch.date}</p>
        <p>Batch Creator: {batch.creator}</p>
      </div>
    )
  }
}

export default Batch;
