import React, {Component} from 'react'
import {InputField, TextareaField} from "../../../Utils/Form"
import * as CoursFunction from "../../Cours/Functions/CoursFunction"
import ListeQuestionnaire from "./ListeQuestionnaire"
import * as ValidationFunctions from "../../../Utils/Form/ValidationFunctions";

class FormQuestionnaire extends Component{
    constructor(props) {
        super(props);
        this.defaultValue = {
            title : "",
            description : "",
            question : { }
        };

        this.editMode = (props.editMode === "true");

        if(this.editMode){
            //todo get questionnaire id
            //todo get data from this id
        }

        this.state = {
            value : {
                title : "",
                description : "",
                question : { }
            },
            class : {
                title : "",
                description : "materialize-textarea ",
            },
            valid : {
                title: false,
                description: false,
                questions : false
            },
            formValid : false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const dataName = event.target.getAttribute("dataname");
        const value = event.target.value;
        let newState = this.state;
        newState = ValidationFunctions.checkValidateWithSize(newState, value, dataName, 1);
        newState = ValidationFunctions.checkValidForm(newState);
        this.setState(newState);
    }

    validQuestions(question, valid){
        const formValid = valid &= this.state.formValid;
        this.setState({
            formValid : formValid
        });
    }

    render() {
        return (
            <form className="wow fadeIn row">
                <div className="col s10 offset-s3">
                    <div className="row low-margin-bottom">
                        <div className="col s8 input-field">
                            <InputField
                                className={this.state.class.title}
                                handleChange={this.handleChange}
                                dataName="title"
                                value={this.state.value.title}
                                type="text"
                                text="Titre du cours"
                                id="title-input"
                                icon="Title"
                                textHelper="Entrez un titre"
                                textSuccess="titre valide"
                                textError="Ce champ ne peut être vide"
                            />
                        </div>
                    </div>
                    <div className="row low-margin-bottom">
                        <div className="col s8 input-field">
                            <TextareaField
                                className={this.state.class.description}
                                handleChange={this.handleChange}
                                dataName="description"
                                value={this.state.value.description}
                                type="textarea"
                                text="Description du cours"
                                id="description-input"
                                icon="short_text"
                                textHelper="Entrez une description"
                                textSuccess="description valide"
                                textError="Ce champ ne peut être vide"
                            />
                        </div>
                    </div>
                </div>
                <div className="row low-margin-bottom">
                    <div className="col s11 offset-s1">
                        <ListeQuestionnaire
                            question={this.state.value.question}
                            validQuestion={this.validQuestions}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s5 offset-s4 mid-margin-top">
                        <button className={"btn btn-large waves-effect waves-light" + (!this.state.formValid ? " disabled" : "")} type="submit" name="action">Créer ce questionnaire
                            <i className="material-icons right">save</i>
                        </button>

                    </div>
                </div>
            </form>
        );
    }
}
export default FormQuestionnaire;