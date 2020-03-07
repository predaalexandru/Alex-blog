//the credentials are email and password
export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        //we use to comunicate to firebase so that the user can login
      const firebase = getFirebase();
      
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