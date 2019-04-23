export default function manageBatch(state = {batches: []}, action){
  switch(action.type){
    case 'ADD_BATCH':
      console.log("inside ADD_BATCH case in reducer")
      return {...state, batches: [...state.batches, action.batch]}
    default:
      return state
  }
}
