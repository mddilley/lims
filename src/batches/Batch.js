import React, { Component } from 'react'

class Batch extends Component {

  render(){
    return(
      <div className="outline">
        <p>Batch Date: {this.props.batch.date}</p>
        <p>Batch Creator: {this.props.batch.creator}</p>
      </div>
    )
  }
}

export default Batch;
