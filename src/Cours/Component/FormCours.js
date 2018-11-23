import React, {Component} from 'react'
import {InputField, TextareaField} from "../../Utils/Form";
import * as CoursFunction from "../Functions/CoursFunction"

class FormCours extends Component{
    constructor(props) {
        super(props);
        this.defaultValue = {
            title : "",
            description : "",
            avatar : {
                head : "",
                body : "",
                bottom : "",
                foot : ""
            }
        };
        this.editMode = (props.editMode === "true");
        if(this.editMode){
            this.defaultValue = props.defaultValue;}

        this.state = {
            value : {
                title : "",
                description : "",
                avatar : {
                    head : "",
                    body : "",
                    bottom : "",
                    foot : ""
                }
            },
            class : {
                title : "",
                description : "materialize-textarea "
            },
            valid : {
                title: false,
                description: false,
                avatar: true

            },
            formValid : false
        };

        this.validateFunctionArray = {
            title : CoursFunction.checkValidateTitle,
            description : CoursFunction.checkValidateDescription
        };
        this.handleChange = this.handleChange.bind(this);
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
        return (
            <form className="wow fadeIn col s10 offset-s3">
                <div className="row low-margin-bottom">
                    <div className="col s6 input-field">
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
                    <div className="col s6 input-field">
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
            </form>
        );
    }
}
export default FormCours;