import React, {Component} from 'react';
import {InputField, CheckBoxField, RadioButtonField} from '../../Utils/Form';
import {StateBox} from '../../Utils/Utils';
import * as ValidationFunctions from "../../Utils/Form/ValidationFunctions";

class FormSignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            value : {
                email: "",
                password: "",
                repassword: "",
                typeAccount: "",
                agreeCGU: "",
            },
            class : {
                email : "",
                password : "",
                repassword: "",
                typeAccount: "",
                agreeCGU: ""
            },
            valid : {
                email : false,
                password : false,
                repassword: false,
                typeAccount : false,
                agreeCGU : false
            },
            formValid : false
        };
        this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        let newState = this.state;

        const regexEmailUniv = new RegExp('^[a-zA-Z0-9.!#$%& ’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]*univ([a-zA-Z0-9-]*)\\.([a-zA-Z0-9-]+)', 'i');
        const dataname = event.target.getAttribute("dataname");
        let value = event.target.value;

        switch(dataname){
            case "email":
                newState = ValidationFunctions.checkValidateWithRegex(newState, value, dataname, regexEmailUniv);
                break;
            case "password":
                newState = ValidationFunctions.checkValidateWithSize(newState, value, dataname, 6);
                break;
            case "repassword":
                newState = ValidationFunctions.checkValidateCompare(newState, value, dataname, newState.value.password);
                break;
            case "agreeCGU":
                newState.value[dataname] = event.target.checked;
                newState.valid[dataname] = event.target.checked;
                break;
            case "typeAccount":
                value = event.target.getAttribute("valueInput");
                newState = ValidationFunctions.saveValidateValue(newState, value, dataname);
                break;
            default :
                alert("Error");
                break;
        }

        newState = ValidationFunctions.checkValidForm(newState);
        this.setState(newState);
    }
    render(){
        return (
            <form className="wow fadeIn col s10 offset-s3">
                <div className="row low-margin-bottom">
                    <div className="col s6 input-field">
                        <InputField
                            className={this.state.class.email}
                            handleChange={this.handleChange}
                            dataname="email"
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
                            dataname="password"
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
                <div className="row low-margin-bottom">
                    <div className="col s6 input-field">
                        <InputField
                            className={this.state.class.repassword}
                            handleChange={this.handleChange}
                            dataname="repassword"
                            value={this.state.value.repassword}
                            type="password"
                            text="Re-password"
                            id="repassword-input"
                            icon="lock"
                            textHelper="Entrer de nouveau votre password"
                            textError="Mot de passe différent"
                            textSuccess="Mot de passe identique"
                        />
                    </div>
                </div>
                <div className="row valign-wrapper low-margin-bottom">
                    <div className="col s1 element-with-state-box">
                        <RadioButtonField
                            labelClassName=""
                            handleChange={this.handleChange}
                            className={this.state.class.typeAccount}
                            dataname="typeAccount"
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
                            colSize="6"
                            title="Title">
                            <span>Les comptes enseignants doivent être vérifiés par un administrateur</span>
                        </StateBox>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6">
                        <CheckBoxField
                            handleChange={this.handleChange}
                            dataname="agreeCGU"
                            value={this.state.value.agreeCGU}>
                            <span>
                                Vous acceptez nos <a href="!#"> Conditions d'utilisation</a>, notre <a href="!#" >Politique de confidentialité</a> et notre <a href="!#">Utilisation des cookies</a>.
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

export default FormSignUp;