import React, {Component} from 'react';
import {CheckBoxField, InputField} from "../../Utils/Form";
import * as AuthFunction from '../Functions/AuthFunction.js';

class FormSignIn extends Component{
    constructor(props){
        super(props);
        this.state = {
            value : {
                email: "",
                password: "",
                stayLogged: "",
            },
            class : {
                email: "",
                password: "",
                stayLogged: "",

            },
            valid : {
                email: false,
                password: false,
                stayLogged: true,

            },
            formValid : false
        };
        this.validateFunctionArray = {
            email : AuthFunction.checkValidateEmail,
            password : AuthFunction.checkValidatePassword,
            stayLogged : function (newData, event) {return newData.value.stayLogged = event.target.checked;}
        };
        this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let newState = this.validateFunctionArray[event.target.getAttribute("dataname")](this.state, event);
        newState.formValid = true;
        const arr = Object.keys(newState.valid).map(function (k) {
            return newState.valid[k]
        });
        arr.map(valid => (newState.formValid &= valid));
        this.setState(newState);
    }

    render() {
        return(
            <form className="wow fadeIn col s10 offset-s3">
                <div className="row low-margin-bottom">
                    <div className="col s6 input-field">
                        <InputField
                            className={this.state.class.email}
                            handleChange={this.handleChange}
                            dataName="email"
                            value={this.state.value.email}
                            type="email"
                            text="Email"
                            id="email-input"
                            icon="email"
                            textHelper="Entrez une adresse e-mail universitaire"
                            textSuccess="Format d'adresse valide"
                            textError="Format d'adresse universitaire invalide"
                        />
                    </div>
                </div>
                <div className="row low-margin-bottom">
                    <div className="col s6 input-field">
                        <InputField
                            className={this.state.class.password}
                            handleChange={this.handleChange}
                            dataName="password"
                            value={this.state.value.password}
                            type="password"
                            text="Password"
                            id="password-input"
                            icon="lock"
                            textHelper="Mot de passe d'au moins 6 caractères"
                            textError="Mot de passe trop court"
                            textSuccess="Mot de passe valide"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s6">
                        <CheckBoxField
                            handleChange={this.handleChange}
                            dataName="cookie"
                            value={this.state.value.cookie}>
                            <span>
                                Rester connecté
                            </span>
                        </CheckBoxField>
                    </div>
                </div>
                <div className="row">
                    <div className="col s5 offset-s2">
                        <button className={"btn btn-large waves-effect waves-light" + (!this.state.formValid ? " disabled" : "")} type="submit" name="action">Se connecter
                            <i className="material-icons right">send</i>
                        </button>

                    </div>
                </div>
            </form>
        );
    }
}
export default FormSignIn;