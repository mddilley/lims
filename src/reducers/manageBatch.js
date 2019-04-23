import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageBatch(state = {batches: []}, action){
  switch(action.type){
    case 'ADD_BATCH':
      console.log("inside ADD_BATCH case in reducer")
      const batch = {...action.batch, batchId: cuid()}
      return {...state, batches: [...state.batches, batch]}
    default:
      return state
  }
}
