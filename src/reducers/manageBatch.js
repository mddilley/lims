export default function manageBatch(state = {batches: []}, action){
  switch(action.type){
    case 'ADD_BATCH':
      console.log("inside reducer")
      debugger
      return ""
    default:
      return state
  }
}
