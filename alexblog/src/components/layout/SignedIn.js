import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedIn = (props) => {
    return (
        <div>
        <ul className="right">
          <li><NavLink to='/create'>New Article</NavLink></li>
          <li><a onClick={props.signOut}>Log Out</a></li>
          <li><NavLink to='/' className="btn btn-floating blue lighten-1">AP</NavLink></li>
        </ul>
      </div>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedIn)