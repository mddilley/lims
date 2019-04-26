import { combineReducers } from 'redux'
import manageBatch from './manageBatch'
import manageSample from './manageSample'

const rootReducer = combineReducers({
  batches: manageBatch,
  samples: manageSample,
})

export default rootReducer;
