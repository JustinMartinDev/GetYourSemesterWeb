import React, {Component} from "react";
import FormSignUp from './FormSignUp'

class SignUp extends Component {
    constructor(props){
        super(props);
    }

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