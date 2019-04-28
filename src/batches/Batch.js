import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Batch extends Component {

  handleClick = (event) => {
    this.props.deleteBatch(this.props.batch.id)
  }

  render(){
    const batchAttr = this.props.batch.attributes
    const batch = this.props.batch
    return(
      <div className="white-background batch-space">
        <p>Batch ID: <Link to={{
          pathname: `batches/${batch.id}/samples`,
          state: {
            batchId: batchAttr.batchCuid,
            id: batch.id
          }
        }}>{batchAttr.batchCuid}</Link> ({batch.relationships.samples.data.length} samples)</p>
        <p>Batch Date: {batchAttr.date}</p>
        <p>Batch Creator: {batchAttr.creator}</p>
        <button onClick={this.handleClick}>Delete</button>

      </div>
    )
  }
}

export default Batch;
