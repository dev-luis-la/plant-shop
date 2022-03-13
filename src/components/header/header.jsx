import React from "react";
import {connect } from 'react-redux';
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.scss'


const Header = ({ currentUser}) =>(
    <div className="header">
        <Link to= "/" className="logo-container">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link to='/shop' className="option">
                Shop
            </Link>
            <Link to='/shop' className="option">
                Contact
            </Link>
            {currentUser ?(
                <div className="signOut" onClick={() => auth.signOut()}>Sign out</div>
            )
            :(
             <Link className="option" to='/signin'>Sign in</Link>
            )}
        </div>
    </div>
)


 const mapStateToProps = ()  => ({
     
 })


export default connect()(Header);