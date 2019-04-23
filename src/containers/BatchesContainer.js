import React, { Component } from 'react'
import Batches from '../batches/Batches'
import BatchInput from '../batches/BatchInput'

class BatchesContainer extends Component {

  render(){
    return(
      <div className="outline">
        <h1>Batch Container</h1>
        <BatchInput />
        <Batches />
      </div>
    )
  }
}

export default BatchesContainer;
