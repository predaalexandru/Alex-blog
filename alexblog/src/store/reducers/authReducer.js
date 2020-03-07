const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  //we use switch statement to check the action type
  switch(action.type){
    case 'LOGIN_ERROR':
      console.log('Login Error');
      return {
        ...state,
        authError: 'Login failed'
      }
    case 'LOGIN_SUCCESS':
      console.log('Login Success');
      return {
        authError: null
      }
    case 'SIGNOUT_SUCCESS':
      console.log('Signout Success');
      return state
    default:
      return state
    }
  };

export default authReducer