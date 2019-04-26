import fetch from 'isomorphic-fetch'
const snakeCaseKeys = require('snakecase-keys')

export function addSample(sample) {
  return {type: 'ADD_SAMPLE', sample}
}

export function deleteSample(sampleId) {
  return {type: 'DELETE_SAMPLE', sampleId}
}

export function fetchSamples(batchId) {
  console.log("inside fetch samples")
  return dispatch => {
    console.log("inside return")
    dispatch({ type: 'LOADING_SAMPLES' });
    return fetch(`http://localhost:4000/batches/${batchId}/samples`)
      .then(response => response.json())
      .then(json => dispatch({ type: 'FETCHING_SAMPLES', payload: json.data}))
  }
}
