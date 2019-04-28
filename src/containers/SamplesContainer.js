import React, { Component } from 'react'
import Samples from '../samples/Samples'
import SampleInput from '../samples/SampleInput'
import { connect } from 'react-redux'
import { addSample, deleteSample, fetchSamples } from '../actions/sampleActions'

class SamplesContainer extends Component {
  componentDidMount() {
    this.props.fetchSamples(this.props.location.state.id)
  }

  render(){
    const batchCuid = this.props.location.state.batchId
    let loader = ""
    if(this.props.loading === true){
      loader = <div className="loader container"></div>
    }
    return(
      <div className="grey-background">
        <h1>Batch ID# {batchCuid}</h1>
        <SampleInput batchId={batchCuid} addSample={this.props.addSample}/>
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

export default connect(mapStateToProps, { addSample, deleteSample, fetchSamples })(SamplesContainer);
