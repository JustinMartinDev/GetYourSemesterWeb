import React, {Component} from 'react'
import {InputField, RadioButtonField, TextareaField, InputFileBox} from "../../../Utils/Form"
import * as CoursFunction from "../Functions/CoursFunction"
//PNG
import hommeAvatarImage from "../images/homme_sprite.png"
import femmeAvatarImage from "../images/femme_sprite.png"
import * as ValidationFunctions from "../../../Utils/Form/ValidationFunctions";

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
                    file : "",
                    imagePreviewUrl: ""
                },
                profName : "",
                avatarType : ""
            },
            class : {
                title : "",
                description : "materialize-textarea ",
                profName : "",
                avatarType : ""
            },
            valid : {
                title: false,
                description: false,
                profName : false,
                avatar: true,
                avatarType: false,
            },
            formValid : false
        };
        this.handleChange = this.handleChange.bind(this);
        this.changeImage = this.changeImage.bind(this);
    }

    handleChange(event) {
        let newState = this.state;
        const dataName = event.target.getAttribute("dataname");
        let value = event.target.value;

        switch(dataName){
            case "title":
                newState = ValidationFunctions.checkValidateWithSize(newState, value, dataName, 1);
                break;
            case "description":
                newState = ValidationFunctions.checkValidateWithSize(newState, value, dataName, 1);
                break;
            case "profName":
                newState = ValidationFunctions.checkValidateWithSize(newState, value, dataName, 1);
                break;
            case "avatarType":
                value = event.target.getAttribute("valueInput");
                newState = ValidationFunctions.saveValidateValue(newState, value, dataName);
                console.log(newState);
                break;
        }

        newState.formValid = true;

        const arr = Object.keys(newState.valid).map(function (k) {
            return newState.valid[k]
        });
        arr.map(valid => (newState.formValid &= valid));
        this.setState(newState);
    }
    changeImage(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                value : {
                    avatar: {
                        file: file,
                        imagePreviewUrl: reader.result
                    },
                    avatarType : "Perso"
                }
            });
        };

        reader.readAsDataURL(file)
    }

    render() {
        let imagePreviewUrl = this.state.value.avatar.imagePreviewUrl;
        let imagePreviewElem = null;

        if(this.state.value.avatarType === "Homme")
            imagePreviewUrl = hommeAvatarImage;

        if(this.state.value.avatarType === "Femme")
            imagePreviewUrl = femmeAvatarImage;


        if (imagePreviewUrl) {
            imagePreviewElem = (<img src={imagePreviewUrl} alt="avatar"/>);
        } else {
            imagePreviewElem = (<div className="previewText">Please select an Image for Preview</div>);
        }

        return (
            <form className="wow fadeIn">
                <div className="col s6">
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
                    <div className="row low-margin-bottom">
                        <div className="col s8 input-field">
                            <InputField
                                className={this.state.class.profName}
                                handleChange={this.handleChange}
                                dataName="profName"
                                value={this.state.value.profName}
                                type="text"
                                text="Nom/Pseudonyme du professeur"
                                id="profName-input"
                                icon="person"
                                textHelper="Entrez le nom/pseudo du professeur"
                                textSuccess="nom valide"
                                textError="Ce champ ne peut être vide"
                            />
                        </div>
                    </div>
                </div>
                <div className="col s6">
                    <div className="row low-margin-bottom">
                        <RadioButtonField
                            labelClassName="low-margin-left"
                            handleChange={this.handleChange}
                            className={this.state.class.avatarType}
                            dataName="avatarType"
                            checked={this.state.value.avatarType}
                            values={["Homme", "Femme", "Perso"]}
                        />
                    </div>
                    <div className="row low-margin-bottom">
                        <InputFileBox
                            changeImage={this.changeImage}
                            valueElement={this.state.value.avatarType}
                            valueConditionToShow="Perso"
                        />
                    </div>
                    <div className="row low-margin-bottom">
                        <div className="col offset-s3">
                            {imagePreviewElem}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s4 offset-s5 mid-margin-top">
                        <button className={"btn btn-large waves-effect waves-light" + (!this.state.formValid ? " disabled" : "")} type="submit" name="action">Créer
                            <i className="material-icons right">save</i>
                        </button>

                    </div>
                </div>
            </form>
        );
    }
}
export default FormCours;