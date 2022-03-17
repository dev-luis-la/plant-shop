import React from "react";
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/signUp/sign-up";
import './sign-out.scss';

const SignInAndOut = () => (

    <div className="form">
    <SignIn/>
    <SignUp/>
    </div>
)


export default SignInAndOut;