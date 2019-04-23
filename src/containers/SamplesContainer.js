import React, { Component } from 'react'
import Samples from '../samples/Samples'
import SampleInput from '../samples/SampleInput'

class SamplesContainer extends Component {
  render(){
    return(
      <div className="outline">
        <h1>Samples container</h1>
        <SampleInput />
        <Samples />
      </div>
    )
  }
}

export default SamplesContainer;
