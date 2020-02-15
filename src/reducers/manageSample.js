import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageSample(state = {samples: [], loading: false}, action){
  switch(action.type){
    case 'ADD_SAMPLE':
      const sample = action.sample.attributes
      return {...state, samples: [...state.samples, sample]}
    case 'DELETE_SAMPLE':
      return {...state, samples: state.samples.filter(sample => sample.id !== action.payload), loading: false}
    case 'LOADING_SAMPLES':
      return {...state, loading: true }
    case 'FETCHING_SAMPLES':
      return {...state, samples: action.payload, loading: false}
    case 'POSTING_SAMPLES':
      const postSample = {...action.payload, id: action.payload.id}
      return {...state, samples: [...state.samples, postSample], loading: false}
    default:
      return state
  }
}
