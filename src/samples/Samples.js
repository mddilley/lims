import React, { Component } from 'react'
import Sample from './Sample'

class Samples extends Component {
  render(){
    const samples = this.props.samples
    return(
      <div className="outline">
        {samples.map((sample, idx) => <Sample key={idx} sample={sample}/>)}
      </div>
    )
  }
}

export default Samples;
