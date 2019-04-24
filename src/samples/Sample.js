import React, { Component } from 'react'

class Sample extends Component {
  render(){
    const sample = this.props.sample
    return(
      <div className="outline">
        <p>{sample.firstName}</p>
        <p>{sample.lastName}</p>
        <p>{sample.age}</p>
      </div>
    )
  }
}

export default Sample;
