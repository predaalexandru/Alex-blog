import firebase from 'firebase'

//the credentials are email and password
export const signIn = (credentials) => {
    return (dispatch, getState) => {
      
      //we use th auth services to sign in with email and password
      firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      ).then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
      }).catch((err) => {
        dispatch({ type: 'LOGIN_ERROR', err });
      });
  
    }
  }

  export const signOut = () => {
    return (dispatch, getState) => {
  
      firebase.auth().signOut().then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' })
      });
    }
  }