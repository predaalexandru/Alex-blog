import authReducer from './authReducer'
import articleReducer from './articleReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,
  project: articleReducer
});

export default rootReducer

// the key name will be the data property on the state object