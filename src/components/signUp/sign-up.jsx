import React from "react";

import FormInput from "../form-input/form-input";
import CustomButon from "../custom-btn/custom-btn";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import './sign-up.scss';
import { async } from "@firebase/util";

class SignUp extends React.Component{
    constructor(){
        super();

        this.state ={
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;
        if (password != confirmPassword) {
            alert('password dont match');
            return;
        }
        try {
            const{ user} = await auth.createUserWithEmailAndPassword(email, password);
             await  createUserProfileDocument(user, {displayName})
             this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.log('error', error)
        };
    };

    handleChanges = event =>{
        const {value, name} = event.target;
        
        this.setState({[name]: value});
    }
    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className="sign-up">
            <h2 className="title">Don't have Account</h2>
                <span>Sign up today</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                     type='text'
                     name='displayName'
                     value={displayName}
                     onChange={this.handleChanges}
                     label='display Name'
                     required
                     ></FormInput>
                    <FormInput
                     type='email'
                     name='email'
                     value={email}
                     onChange={this.handleChanges}
                     label='email'
                     required
                     ></FormInput>
                     <FormInput
                     type='password'
                     name='password'
                     value={displayName}
                     onChange={this.handleChanges}
                     label='password'
                     required>
                     </FormInput>
                     <FormInput
                     type='password'
                     name='ConfirmPassword'
                     value={confirmPassword}
                     onChange={this.handleChanges}
                     label='Confirm Password'
                     required></FormInput>

                <CustomButon type="submit">Sign up</CustomButon>
                </form> 
            </div>
        )
    }
}
export default SignUp;