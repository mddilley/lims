import React, { Component } from 'react'
import Batches from '../batches/Batches'
import BatchInput from '../batches/BatchInput'
import { connect } from 'react-redux'

class BatchesContainer extends Component {

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

const mapDispatchToProps = dispatch => ({
  addBatch: batch => dispatch({type: 'ADD_BATCH', batch}),
  deleteBatch: batchId => dispatch({type: 'DELETE_BATCH', batchId}),
})

export default connect(mapStateToProps, mapDispatchToProps)(BatchesContainer);
