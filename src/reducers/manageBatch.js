import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageBatch(state = {batches: [], loading: false}, action){
  switch(action.type){
    case 'ADD_BATCH':
      console.log("inside ADD_BATCH case in reducer")
      const batch = action.batch.attributes
      return {...state, batches: [...state.batches, batch]}
    case 'DELETE_BATCH':
      console.log("inside DELETE_BATCH case in reducer")
      return {...state, batches: state.batches.filter(batch => batch.id !== action.payload), loading: false}
    case 'LOADING_BATCHES':
      console.log("inside LOADING_BATCHES case in reducer")
      return {...state, loading: true }
    case 'FETCHING_BATCHES':
      console.log("inside FETCHING_BATCHES case in reducer")
      return {...state, batches: action.payload, loading: false}
    case 'POSTING_BATCHES':
      console.log("inside POSTING_BATCHES case in reducer")
      const postBatch = {...action.payload, id: action.payload.id}
      return {...state, batches: [...state.batches, postBatch], loading: false}
    default:
      return state
  }
}
