import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Batch extends Component {

  handleClick = (event) => {
    this.props.deleteBatch(this.props.batch.attributes.batchCuid)
  }

  render(){
    const batchAttr = this.props.batch.attributes
    const batch = this.props.batch
    return(
      <div className="outline">
        <p>Batch ID: <Link to={{
          pathname: `batches/${batch.id}/samples`,
          state: {
            batchId: batchAttr.batchCuid
          }
        }}>{batchAttr.batchCuid}</Link></p>
        <p>Batch Date: {batchAttr.date}</p>
        <p>Batch Creator: {batchAttr.creator}</p>
        <button onClick={this.handleClick}>Delete</button>

      </div>
    )
  }
}

export default Batch;
