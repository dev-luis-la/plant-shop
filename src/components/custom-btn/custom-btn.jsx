import React from "react";

import './customButton.scss';

const customButon = ({children, isGoogleSignIn, ...otherProps}) =>(
    <button 
    className={`${isGoogleSignIn ?
     'google-sign-in' : ''} custom-button`} {...otherProps }>
        {children}
    </button>
)
 export default customButon;