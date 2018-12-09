import React, {Component} from 'react';
import {CheckBoxField, InputField} from "../../Utils/Form";
import * as ValidationFunctions from "../../Utils/Form/ValidationFunctions"

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
        this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let newState = this.state;

        const regexEmailUniv = new RegExp('^[a-zA-Z0-9.!#$%& ’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]*univ([a-zA-Z0-9-]*)\\.([a-zA-Z0-9-]+)', 'i');
        const dataName = event.target.getAttribute("dataname");
        const value = event.target.value;

        switch(dataName){
            case "email":
                newState = ValidationFunctions.checkValidateWithRegex(newState, value, dataName, regexEmailUniv);
                break;
            case "password":
                newState = ValidationFunctions.checkValidateWithSize(newState, value, dataName, 6);
                break;
            case "stayLogged":
                newState.value[dataName] = event.target.checkbox;
                break;
            default :
                window.Materialize.toast("error", 3000);
                break;
        }
        newState = ValidationFunctions.checkValidForm(newState);
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