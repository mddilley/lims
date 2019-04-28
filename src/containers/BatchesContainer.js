import React, { Component } from 'react'
import Batches from '../batches/Batches'
import BatchInput from '../batches/BatchInput'
import { connect } from 'react-redux'
import { fetchBatches, addBatch, deleteBatch, postBatches } from '../actions/batchActions'

class BatchesContainer extends Component {

  componentDidMount() {
    this.props.fetchBatches()
  }

  render(){
    let loader = ""
    if(this.props.loading === true){
      loader = <div className="loader container"></div>
    }
    return(
      <div className="grey-background">
        <BatchInput postBatches={this.props.postBatches}/>
        <Batches batches={this.props.batches} deleteBatch={this.props.deleteBatch}/>
        {loader}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    batches: state.batches.batches,
    loading: state.batches.loading
  }
}



export default connect(mapStateToProps, {addBatch, fetchBatches, deleteBatch, postBatches})(BatchesContainer);
