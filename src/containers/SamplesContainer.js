import React, { Component } from 'react'
import Samples from '../samples/Samples'
import SampleInput from '../samples/SampleInput'
import { connect } from 'react-redux'

class SamplesContainer extends Component {
  render(){
    const batchId = this.props.location.state.batchId
    let loader = ""
    if(this.props.loading === true){
      loader = <div className="loader container"></div>
    }
    return(
      <div className="outline">
        <h1>Batch ID# {batchId}</h1>
        <SampleInput batchId={batchId} addSample={this.props.addSample}/>
        <Samples samples={this.props.samples} deleteSample={this.props.deleteSample}/>
        {loader}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    samples: state.samples.samples,
    loading: state.samples.loading
  }
}

const mapDispatchToProps = dispatch => {
  return{
    addSample: sample => dispatch({type: 'ADD_SAMPLE', sample}),
    deleteSample: sampleId => dispatch({type: 'DELETE_SAMPLE', sampleId}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SamplesContainer);
