import React, { Component } from 'react'
import Batches from '../batches/Batches'
import BatchInput from '../batches/BatchInput'
import { connect } from 'react-redux'

class BatchesContainer extends Component {

  render(){
    return(
      <div className="outline">
        <h1>Batch Container</h1>
        <BatchInput />
        <Batches />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    batches: state.batches
  }
}

export default connect(mapStateToProps, null)(BatchesContainer);
