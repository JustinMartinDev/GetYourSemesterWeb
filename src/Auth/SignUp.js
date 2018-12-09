import React, {Component} from "react";
import {FormSignUp} from "./Components";

class SignUp extends Component {
    render(){
        return(
            <div className="dashboard container">
                <div className="row center">
                    <h4>Inscription</h4>
                </div>
                <div className="row">
                    <FormSignUp/>
                </div>
            </div>
        );
    }
}

export default SignUp;