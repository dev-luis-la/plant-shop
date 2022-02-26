import React from "react";
import SiginIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/signUp/sign-up";
import './sign-out.scss';

const SignInAndOut = () => (

    <div className="form">
    <SiginIn/>
    <SignUp/>
    </div>
)


export default SignInAndOut;