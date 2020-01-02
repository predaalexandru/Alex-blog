import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOut = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/register'>Register</NavLink></li>
        <li><NavLink to='/signin'>Login</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOut