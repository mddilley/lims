import fetch from 'isomorphic-fetch'

export function fetchBatches() {
  console.log("inside fetch")
  return dispatch => {
    console.log("inside return")
    dispatch({ type: 'LOADING_BATCHES' });
    return fetch('http://localhost:4000/batches')
      .then(response => response.json())
      .then(json => dispatch({ type: 'FETCHING_BATCHES', payload: json.data}))
  }
}

export function addBatch(batch) {
  return { type: 'ADD_BATCH', batch}
}

export function deleteBatch(batchId) {
  return { type: 'DELETE_BATCH', batchId }
}
