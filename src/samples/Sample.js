import React, { Component } from 'react'

class Sample extends Component {
  handleClick = event => {
    this.props.deleteSample(this.props.sample.sampleId)
  }

  render(){
    const sample = this.props.sample
    return(
      <div className="outline">
        <p>{sample.sampleId}</p>
        <p>{sample.firstName}</p>
        <p>{sample.lastName}</p>
        <p>{sample.age}</p>
        <button onClick={this.handleClick}>Delete</button>
      </div>
    )
  }
}

export default Sample;
