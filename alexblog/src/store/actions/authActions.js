import firebase, { db } from '../../config/Firebase';
import 'firebase/auth';
import 'firebase/firestore';

//the credentials are email and password
export const signIn = (credentials) => {
    return (dispatch, getState) => {
      
      //we use the auth services to sign in with email and password
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
        firebase.logout();
        dispatch({ type: 'SIGNOUT_SUCCESS' })
      });
    }
  }

  export const register = (newUser) => {
    return (dispatch, getState, firestore) => {

      //we use a method to create a new user
      firebase.auth().createUserWithEmailAndPassword(
        newUser.email, 
        newUser.password
      ).then(resp => {
        //instead of using add() , we use doc to specify the users that we create up with doc()
        return db.collection('users').doc(resp.user.uid).set({
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          initials: newUser.firstName[0] + newUser.lastName[0]
        });
      }).then(() => {
        dispatch({ type: 'REGISTER_SUCCESS' });
      }).catch((err) => {
        dispatch({ type: 'REGISTER_ERROR', err});
      });
    }
  }