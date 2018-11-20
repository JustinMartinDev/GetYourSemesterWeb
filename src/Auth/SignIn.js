import React, {Component} from "react";
import {FormSignIn} from "./Components";

class SignIn extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="dashboard container">
                <div className="row center">
                    <h4>Connexion</h4>
                </div>
                <div className="row">
                    <FormSignIn/>
                </div>
            </div>
        );
    }
}

export default SignIn;