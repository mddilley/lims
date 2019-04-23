import React, { Component } from 'react'
import Batch from './Batch'

class Batches extends Component {

  render(){
    return(
      <div className="outline">
        <h2>List of Batches</h2>
        {this.props.batches.map((batch, idx) => <Batch key={idx} batch={batch} deleteBatch={this.props.deleteBatch}/>)}
      </div>
    )
  }
}

export default Batches;
