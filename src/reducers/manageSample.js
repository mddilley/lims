import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageSample(state = {samples: [], loading: false}, action){
  switch(action.type){
    case 'ADD_SAMPLE':
      console.log("inside ADD_SAMPLE case in reducer")
      const sample = {...action.sample, sampleId: cuid()}
      return {...state, samples: [...state.samples, sample]}
    case 'DELETE_SAMPLE':
      console.log("inside DELETE_SAMPLE case in reducer")
      return {...state, samples: state.samples.filter(sample => sample.sampleId !== action.sampleId)}
    case 'LOADING_SAMPLES':
      console.log("inside LOADING_SAMPLES case in reducer")
      return {...state, loading: true }
    case 'FETCHING_SAMPLES':
      console.log("inside FETCHING_SAMPLES case in reducer")
      return {...state, samples: action.payload, loading: false}
    default:
      return state
  }
}
