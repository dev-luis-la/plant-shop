import React from "react";
import FormInput from "../form-input/form-input";
import CustomButon from "../custom-btn/custom-btn";
import './sign-in.styles.scss'

class SiginIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email: '',
            password: ''
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '' , password: ''})
    }

    handleChange = event => {
        const {value, name } = event.target;
        this.setState({[name]: value})
    }
    render(){
        return(
            <div className="sign-in">
                <h2>Already have an Account</h2>
                <span>Sign In with Email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                     name="email"
                     type="email"
                     value={this.state.email}
                     handleChange={this.handleChange}
                     label="email"
                     required/>
                  
                    <FormInput 
                    name="password"
                     type="password"
                     label="password"
                      value={this.state.password}
                      handleChange={this.handleChange}
                       required/>
                   

                    <CustomButon type="submit" >SIGN IN</CustomButon>

                </form>
            </div>
        )
    }
}

export default SiginIn;