import React, { Component } from 'react'
import Batch from './Batch'

class Batches extends Component {

  render(){
    return(
      <div className="outline">
        <h2>List of Batches</h2>
        <Batch />
      </div>
    )
  }
}

export default Batches;
