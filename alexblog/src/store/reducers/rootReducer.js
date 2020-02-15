import authReducer from './authReducer'
import articleReducer from './articleReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
  auth: authReducer,
  article: articleReducer,
  firestore: firestoreReducer
});

export default rootReducer