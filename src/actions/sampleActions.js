import fetch from 'isomorphic-fetch'
const snakeCaseKeys = require('snakecase-keys')

export function addSample(sample) {
  return {type: 'ADD_SAMPLE', sample}
}

export function deleteSample(sampleId) {
  return dispatch => {
    console.log("inside return")
    dispatch({ type: 'LOADING_SAMPLES' });
    return fetch(`https://oculus-lims.herokuapp.com/samples/${sampleId}`,{
      method: 'DELETE',
      body: JSON.stringify(snakeCaseKeys({sample: {id: sampleId}})),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => dispatch({ type: 'DELETE_SAMPLE', payload: sampleId}))
  }
}

export function fetchSamples(batchId) {
  console.log("inside fetch samples")
  return dispatch => {
    console.log("inside return")
    dispatch({ type: 'LOADING_SAMPLES' });
    return fetch(`https://oculus-lims.herokuapp.com/batches/${batchId}/samples`)
      .then(response => response.json())
      .then(json => dispatch({ type: 'FETCHING_SAMPLES', payload: json.data}))
  }
}

export function postSample(sample) {
  console.log("inside post fetch")
  return dispatch => {
    console.log("inside return")
    dispatch({ type: 'LOADING_SAMPLES' });
    return fetch(`https://oculus-lims.herokuapp.com/batches/${sample.batchId}/samples`,{
      method: 'POST',
      body: JSON.stringify(snakeCaseKeys({sample: sample.attributes})),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(json => dispatch({ type: 'POSTING_SAMPLES', payload: json.data}))
  }
}
