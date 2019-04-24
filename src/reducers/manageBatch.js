import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageBatch(state = {batches: [], samples: []}, action){
  switch(action.type){
    case 'ADD_BATCH':
      console.log("inside ADD_BATCH case in reducer")
      const batch = {...action.batch, batchId: cuid()}
      return {...state, batches: [...state.batches, batch]}
    case 'DELETE_BATCH':
      console.log("inside DELETE_BATCH case in reducer")
      return {...state, batches: state.batches.filter(batch => batch.batchId !== action.batchId)}
    case 'ADD_SAMPLE':
      console.log("inside ADD_SAMPLE case in reducer")
      const sample = {...action.sample, sampleId: cuid()}
      return {...state, samples: [...state.samples, sample]}
    case 'DELETE_SAMPLE':
      console.log("inside DELETE_SAMPLE case in reducer")
      return {...state, samples: state.samples.filter(sample => sample.sampleId !== action.sampleId)}
    default:
      return state
  }
}
