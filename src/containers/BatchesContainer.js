import React, { Component } from 'react'
import Batches from '../batches/Batches'
import BatchInput from '../batches/BatchInput'
import { connect } from 'react-redux'
import { fetchBatches, addBatch, deleteBatch } from '../actions/batchActions'

class BatchesContainer extends Component {

  componentDidMount() {
    this.props.fetchBatches()
  }

  render(){
    return(
      <div className="outline">
        <h1>Batch Container</h1>
        <BatchInput addBatch={this.props.addBatch}/>
        <Batches batches={this.props.batches} deleteBatch={this.props.deleteBatch}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    batches: state.batches
  }
}



export default connect(mapStateToProps, {addBatch, fetchBatches, deleteBatch})(BatchesContainer);
