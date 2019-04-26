import fetch from 'isomorphic-fetch'
const snakeCaseKeys = require('snakecase-keys')

export function addSample(sample) {
  return {type: 'ADD_SAMPLE', sample}
}

export function deleteSample(sampleId) {
  return {type: 'DELETE_SAMPLE', sampleId}
}
