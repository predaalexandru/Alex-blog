import React from 'react'
import { Link } from 'react-router-dom'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import {connect} from 'react-redux'


const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3"> 
         <div className="container">
         <Link to='/' className="brand-logo">Alex Blog</Link>
         <SignedIn />
         <SignedOut />
         </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return{
        //we return an object
        auth: state.firebase.auth
    }
  }

export default connect(mapStateToProps)(Navbar)