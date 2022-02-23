import React from "react";

import './customButton.scss';

const customButon = ({children, ...otherProps}) =>(
    <button className="custom-button" {...otherProps }>
        {children}
    </button>
)
 export default customButon;