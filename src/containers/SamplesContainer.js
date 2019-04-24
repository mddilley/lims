import React, { Component } from 'react'
import Samples from '../samples/Samples'
import SampleInput from '../samples/SampleInput'

class SamplesContainer extends Component {
  render(){
    return(
      <div className="outline">
        <h1>Batch ID# {this.props.location.state.batchId}</h1>
        <SampleInput />
        <Samples />
      </div>
    )
  }
}

export default SamplesContainer;
