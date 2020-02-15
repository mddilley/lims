import fetch from 'isomorphic-fetch'
const snakeCaseKeys = require('snakecase-keys')

export function fetchBatches() {
  return dispatch => {
    dispatch({ type: 'LOADING_BATCHES' });
    return fetch('https://oculus-lims-api.herokuapp.com/batches')
      .then(response => response.json())
      .then(json => dispatch({ type: 'FETCHING_BATCHES', payload: json.data}))
  }
}

export function postBatches(batch) {
  return dispatch => {
    dispatch({ type: 'LOADING_BATCHES' });
    return fetch('https://oculus-lims-api.herokuapp.com/batches',{
      method: 'POST',
      body: JSON.stringify(snakeCaseKeys({batch: batch.attributes})),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(json => dispatch({ type: 'POSTING_BATCHES', payload: json.data}))
  }
}

export function addBatch(batch) {
  return { type: 'ADD_BATCH', batch}
}

export function deleteBatch(batchId) {
  return dispatch => {
    dispatch({ type: 'LOADING_BATCHES' });
    return fetch(`https://oculus-lims-api.herokuapp.com/batches/${batchId}`,{
      method: 'DELETE',
      body: JSON.stringify(snakeCaseKeys({batch: {id: batchId}})),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => dispatch({ type: 'DELETE_BATCH', payload: batchId}))
  }
}
