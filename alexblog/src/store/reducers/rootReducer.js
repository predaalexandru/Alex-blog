import authReducer from './authReducer'
import articleReducer from './articleReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  article: articleReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer