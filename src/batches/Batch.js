import React, { Component } from 'react'
import { Link } from 'react-router-dom'
let moment = require('moment');

class Batch extends Component {

  handleClick = (event) => {
    this.props.deleteBatch(this.props.batch.id)
  }

  render(){
    const batchAttr = this.props.batch.attributes
    const batch = this.props.batch
    const date = moment(this.props.date).format("MM/DD/YYYY")
    return(
      <div className="white-background batch-space">
        <p>Batch ID: <Link to={{
          pathname: `batches/${batch.id}/samples`,
          state: {
            batchId: batchAttr.batchCuid,
            id: batch.id
          }
        }}>{batchAttr.batchCuid}</Link> ({batch.relationships.samples.data.length} samples)</p>
        <p>Batch Date: {date}</p>
        <p>Batch Creator: {batchAttr.creator}</p>
        <button className="btn btn-danger" onClick={this.handleClick}>Delete</button>

      </div>
    )
  }
}

export default Batch;
