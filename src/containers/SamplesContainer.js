import React, { Component } from 'react'
import Samples from '../samples/Samples'
import SampleInput from '../samples/SampleInput'
import { connect } from 'react-redux'

class SamplesContainer extends Component {
  render(){
    const batchId = this.props.location.state.batchId
    return(
      <div className="outline">
        <h1>Batch ID# {batchId}</h1>
        <SampleInput batchId={batchId} addSample={this.props.addSample}/>
        <Samples samples={this.props.samples}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    samples: state.samples
  }
}

const mapDispatchToProps = dispatch => {
  return{
    addSample: sample => dispatch({type: 'ADD_SAMPLE', sample})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SamplesContainer);
