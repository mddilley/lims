import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageBatch(state = {batches: [], loading: false}, action){
  switch(action.type){
    case 'ADD_BATCH':
      const batch = action.batch.attributes
      return {...state, batches: [...state.batches, batch]}
    case 'DELETE_BATCH':
      return {...state, batches: state.batches.filter(batch => batch.id !== action.payload), loading: false}
    case 'LOADING_BATCHES':
      return {...state, loading: true }
    case 'FETCHING_BATCHES':
      return {...state, batches: action.payload, loading: false}
    case 'POSTING_BATCHES':
      const postBatch = {...action.payload, id: action.payload.id}
      return {...state, batches: [...state.batches, postBatch], loading: false}
    default:
      return state
  }
}
