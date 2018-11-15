import React, {Component} from 'react';
import InputField from './InputField';
import CssClassManipulator from '../../../model/CssClassManipulator';

let regExEmailUniv = new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]*univ([a-zA-Z0-9-]*)\\.([a-zA-Z0-9-]+)', 'i');

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
            }
        };

        this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        var newState = this.state;

        if(event.target.type === "email" || event.target.type === "password") {
            if (event.target.type === "email")
                if (regExEmailUniv.exec(event.target.value)) {
                    newState.value.email = event.target.value;
                    if(!newState.class.email.includes("valid"))
                        newState.class.email = newState.class.email.replace("valid","invalid");
                }
                else if(!newState.class.email.includes("invalid")) {
                    newState.class.email = newState.class.email.replace("valid", "");
                    newState.class.email += " invalid";
                }
            if (event.target.type === "password")
                if (event.target.value.length > 6) {
                    newState.value.password = event.target.value;
                    new CssClassManipulator(event.target).replace("valid", "invalid");
                }
                else
                    new CssClassManipulator(event.target).append("invalid");
        }
        else newState.value[event.target.dataName] = event.target.value

        console.log(newState);
        this.setState(newState);
    }

    render(){
        return (
            <form className="col s12 offset-s3">
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
                <div className="row">
                    <div className="col s6">
                        <p>
                            <label>
                                <input className="with-gap" name="group1" type="radio"/>
                                <span>Student</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input className="with-gap" name="group1" type="radio"/>
                                <span>Teacher</span>
                            </label>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col s5 offset-s2">
                        <button className="btn btn-large waves-effect waves-light" type="submit" name="action">S'inscrire
                            <i className="material-icons right">send</i>
                        </button>

                    </div>
                </div>
            </form>
        );
    }
}


export default FormSignUp;


/*<div className="row">
                 <div className="input-field col s6">
                     <i className="material-icons prefix">email</i>
                     <input id="email" type="email" className="validate"/>
                     <label htmlFor="email">Email</label>
                 </div>
             </div>
             <div className="row">
                 <div className="input-field col s6">
                     <i className="material-icons prefix">lock</i>
                     <input id="password" type="password" className="validate"/>
                     <label htmlFor="password">Password</label>
                 </div>
             </div>*/