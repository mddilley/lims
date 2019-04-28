import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Batch from './Batch'

class Batches extends Component {

  render(){
    return(
      <div>
      <br/>
        <h2>List of Batches</h2>
        <Container>
          {this.props.batches.map((batch, idx) => <Batch key={idx} batch={batch} deleteBatch={this.props.deleteBatch}/>)}
        </Container>
      </div>
    )
  }
}

export default Batches;
