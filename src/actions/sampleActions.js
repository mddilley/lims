import fetch from 'isomorphic-fetch'
const snakeCaseKeys = require('snakecase-keys')

export function addSample(sample) {
  return {type: 'ADD_SAMPLE', sample}
}

export function deleteSample(sampleId) {
  return dispatch => {
    console.log("inside return")
    dispatch({ type: 'LOADING_SAMPLES' });
    return fetch(`http://localhost:4000/samples/${sampleId}`,{
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
    return fetch(`http://localhost:4000/batches/${batchId}/samples`)
      .then(response => response.json())
      .then(json => dispatch({ type: 'FETCHING_SAMPLES', payload: json.data}))
  }
}
