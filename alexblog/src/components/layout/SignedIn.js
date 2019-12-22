import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedIn = () => {
    return (
        <div>
        <ul className="right">
          <li><NavLink to='/'>New Article</NavLink></li>
          <li><NavLink to='/'>Log Out</NavLink></li>
          <li><NavLink to='/' className="btn btn-floating pink lighten-1">AP</NavLink></li>
        </ul>
      </div>
    )
}

export default SignedIn