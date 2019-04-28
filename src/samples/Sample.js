import React, { Component } from 'react'

class Sample extends Component {
  handleClick = event => {
    this.props.deleteSample(this.props.sample.id)
  }

  render(){
    const sample = this.props.sample.attributes
    return(
      <div className="white-background batch-space">
        <p>Sample ID# {sample.sampleCuid}</p>
        <p>Patient Name: {sample.firstName + " " + sample.lastName}</p>
        <p>Age: {sample.age}</p>
        <button className="btn btn-danger" onClick={this.handleClick}>Delete</button>
      </div>
    )
  }
}

export default Sample;
