import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedIn = () => {
    return (
        <div>
        <ul className="right">
          <li><NavLink to='/create'>New Article</NavLink></li>
          <li><NavLink to='/'>Log Out</NavLink></li>
          <li><NavLink to='/' className="btn btn-floating blue lighten-1">AP</NavLink></li>
        </ul>
      </div>
    )
}

export default SignedIn