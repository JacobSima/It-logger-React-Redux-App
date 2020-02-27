import {combineReducers} from 'redux'
import logReducer from './logReducer'
import techReducer from './techReducer'

export default combineReducers({
  // here it is what we gonna call our state
   log:logReducer,
   tech:techReducer
})