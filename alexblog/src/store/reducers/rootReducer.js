import authReducer from './authReducer'
import articleReducer from './articleReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,
  article: articleReducer
});

export default rootReducer