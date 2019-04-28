import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Sample from './Sample'

class Samples extends Component {
  render(){
    const samples = this.props.samples
    return(
      <div>
      <br/>
      <Container>
        {samples.map((sample, idx) => <Sample key={idx} sample={sample} deleteSample={this.props.deleteSample}/>)}
      </Container>
      </div>
    )
  }
}

export default Samples;
