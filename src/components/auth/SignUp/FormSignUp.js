import React, {Component} from 'react';
import {InputField, CheckBoxField, RadioButtonField} from '../../Form';
import {StateBox} from '../../Utils';

const regExEmailUniv = new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]*univ([a-zA-Z0-9-]*)\\.([a-zA-Z0-9-]+)', 'i');

class FormSignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            value : {
                email: "",
                password: "",
                typeAccount: "",
                agreeCGU: "",
            },
            class : {
                email : "",
                password : "",
                typeAccount: "",
                agreeCGU: ""
            },
            valid : {
                email : false,
                password : false,
                typeAccount : false,
                agreeCGU : false
            },
            formValid : false
        };
        this.validateFunctionArray = {
            email : checkValidateEmail,
            password : checkValidatePassword,
            typeAccount : checkValidateTypeAccount,
            agreeCGU : checkValidateAgreeCGU
        };
        this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let newState = this.validateFunctionArray[event.target.getAttribute("dataname")](this.state, event);
        newState.formValid = true;
        const arr = Object.keys(newState.valid).map(function(k) { return newState.valid[k] });
        console.log(arr);
        arr.map(valid => ( newState.formValid &= valid));
        this.setState(newState);
    }

    render(){
        return (
            <form className="col s10 offset-s3">
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

                <div className="row valign-wrapper low-margin-bottom">
                    <div className="col s1 element-with-state-box">
                        <RadioButtonField
                            handleChange={this.handleChange}
                            className={this.state.class.typeAccount}
                            dataName="typeAccount"
                            checked={this.state.value.typeAccount}
                            values={["Teacher", "Student"]}
                        />
                    </div>
                    <div className="state-box-col">
                        <StateBox
                            valueElement={this.state.value.typeAccount}
                            valueConditionToShow="Teacher"
                            classColor="warning-border state-box-col"
                            icon="warning"
                            text="Les comptes enseignants doivent être vérifiés par un administrateur"
                            title="Title"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s6">
                        <CheckBoxField
                            handleChange={this.handleChange}
                            dataName="agreeCGU"
                            value={this.state.value.agreeCGU}>
                            <span>
                                Vous acceptez nos <a href="#"> Conditions d'utilisation</a>, notre <a href="#" >Politique de confidentialité</a> et notre <a href="#">Utilisation des cookies</a>.
                            </span>
                        </CheckBoxField>
                    </div>
                </div>
                <div className="row">
                    <div className="col s5 offset-s2">
                        <button className={"btn btn-large waves-effect waves-light" + (!this.state.formValid ? " disabled" : "")} type="submit" name="action">S'inscrire
                            <i className="material-icons right">send</i>
                        </button>

                    </div>
                </div>
            </form>
        );
    }
}

function checkValidateEmail(newState, event) {
    if (regExEmailUniv.exec(event.target.value)) {
        newState.value.email = event.target.value;
        if(!(newState.class.email === "valid")){
            newState.class.email = newState.class.email.replace("invalid","valid");
            newState.valid.email = true;
        }
    }
    else if(!newState.class.email.includes("invalid")) {
        newState.class.email = newState.class.email.replace("valid", "");
        newState.class.email += "invalid";
        newState.valid.email = false;
    }
    return newState;
}
function checkValidatePassword(newState, event) {
    if (event.target.value.length > 6) {
        newState.value.password = event.target.value;
        if(!(newState.class.password === "valid")) {
            newState.class.password = newState.class.password.replace("invalid", "valid");
            newState.valid.password = true;
        }
    }
    else if(!newState.class.password.includes("invalid")) {
        newState.class.password = newState.class.password.replace("valid", "");
        newState.class.password += "invalid";
        newState.valid.password = false;
    }
    return newState
}
function checkValidateTypeAccount(newState, event) {
    newState.value.typeAccount = event.target.getAttribute("valueInput");
    newState.valid.typeAccount = true;
    return newState;
}
function checkValidateAgreeCGU(newState, event) {
    newState.value.agreeCGU = event.target.checked;
    newState.valid.agreeCGU = event.target.checked;
    return newState;
}

export default FormSignUp;