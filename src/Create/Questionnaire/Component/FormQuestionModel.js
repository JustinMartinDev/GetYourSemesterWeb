import React, {Component} from 'react';
import {StateBox} from "../../../Utils/Utils";
import {CheckBoxField, InputField, TextareaField} from "../../../Utils/Form";
import * as ValidationFunctions from "../../../Utils/Form/ValidationFunctions";

class FormQuestionModel extends Component{
    constructor(props) {
        super(props);
        this.addFunctionParent = props.handleAddFunction;
        this.state = {
            value : {
                questionTitle: "",
                response: {
                    1: {
                        responseText: "",
                        isAnswer: false
                    },
                    2: {
                        responseText: "",
                        isAnswer: false
                    },
                    3: {
                        responseText: "",
                        isAnswer: false
                    },
                    4: {
                        responseText: "",
                        isAnswer: false
                    },
                    5: {
                        responseText: "",
                        isAnswer: false
                    },
                    6: {
                        responseText: "",
                        isAnswer: false
                    }
                }
            },
            class : {
                questionTitle: "",
                response: {
                    1: "materialize-textarea ",
                    2: "materialize-textarea ",
                    3: "materialize-textarea ",
                    4: "materialize-textarea ",
                    5: "materialize-textarea ",
                    6: "materialize-textarea "
                }
            },
            valid : {
                questionTitle: false,
                response: {
                    1: false,
                    2: false,
                    3: true,
                    4: true,
                    5: true,
                    6: true
                }
            },
            formValid : false,
            messageInfo : [
                "Vous devez au moins entrer deux réponses",
                "Vous devez au moins indiquer une bonne réponse"
            ]
        };
        this.baseState = this.state;

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let dataname = event.target.getAttribute("dataname");
        let newState = this.state;
        const value = (event.target.hasOwnProperty("checked") ? event.target.checked : event.target.value);

        if(!dataname.includes("-"))
            newState = ValidationFunctions.checkValidateWithSize(newState, value, dataname, 1);
        else {
            dataname = dataname.split("-");
            const responseId = (dataname[0].substring(8, dataname[0].length));
            if(dataname[1]==="responseText") {
                if (responseId <= 2)
                    newState = ValidationFunctions.checkValidateWithSizeTabSecondKey(newState, value, "response", responseId, 1, dataname[1]);
                else
                    newState.value["response"][responseId].responseText = value;
            }
            else newState.value["response"][responseId].isAnswer = value;
        }

        newState.messageInfo = [];

        newState.formValid = newState.valid.questionTitle;
        newState.formValid &= ValidationFunctions.checkValidTab(newState, "response");
        if(!newState.formValid)
            newState.messageInfo.push("Vous devez au moins entrer deux réponses");

        newState.formValid &= this.validNbAnswer(newState);
        if(!newState.formValid)
            newState.messageInfo.push("Vous devez au moins indiquer une bonne réponse");

        this.setState(newState);

    }

    validNbAnswer(newState) {
        let nb = 0;
        let size = 0;

        for(var property in newState.value.response) {
            size++;
        }

        for(let i=1; i<size+1; i++) {
            if (newState.value.response[i].isAnswer)
                nb++;
        }

        return nb > 0;

    }

    addFunction = () => {
       this.addFunctionParent(this.state.value);
       document.getElementById("create-question-form").reset();
    };

    render() {
        return(
            <div className="modal bg-white modal-create-question" id="modal-question-create-form">
                <div className="modal-content no-padding-bottom">
                    <div className="row un-margin-top-30">
                        <div className="col s8">
                            <StateBox
                                valueElement={!this.state.formValid ? "error" : "noError"}
                                valueConditionToShow="error"
                                colSize="12"
                                classColor="error-border state-box-col"
                                classMargin = "mid-margin-bottom-45 position-absolute"
                                icon="error"
                                title="Error">
                                <ul>
                                    {this.state.messageInfo.map((message, id)=> (
                                        <li key={id}>{message}</li>
                                    ))}
                                </ul>
                            </StateBox>
                            <StateBox
                                classMargin="mid-margin-bottom-45"
                                valueElement={this.state.formValid ? "validate" : "notValidate"}
                                valueConditionToShow="validate"
                                colSize="12"
                                classColor="valid-border state-box-col"
                                icon="check"
                                title="Validate">
                            </StateBox>
                        </div>
                    </div>
                    <form id="create-question-form">
                        <div className="row">
                        <div className="col s8 input-field">
                            <InputField
                                className={this.state.class.questionTitle}
                                handleChange={this.handleChange}
                                dataname="questionTitle"
                                value={this.state.value.questionTitle}
                                type="text"
                                text="Question"
                                id="question-title-input"
                                icon="title"
                                textHelper="Entrez un titre"
                                textSuccess="titre valide"
                                textError="Ce champ ne peut être vide"
                            />
                        </div>
                        <div className="row">
                            <div className="col s5 input-field">
                                <TextareaField
                                    className={this.state.class.response[1]}
                                    handleChange={this.handleChange}
                                    dataname="response1-responseText"
                                    value={this.state.value.response[1].responseText}
                                    type="text"
                                    text="Réponse 1"
                                    id={"question-answer-"+((this.count*6)+1)}
                                    icon="question_answer"
                                    textHelper="Entrez une reponse"
                                    textSuccess="Format réponse valide"
                                    textError="Format de réponse invalide"
                                />
                            </div>
                            <div className="col s1 input-field">
                                <CheckBoxField
                                    handleChange={this.handleChange}
                                    dataname="response1-isAnswer"
                                    value={this.state.value.response[2].isAnswer}>
                                    <span></span>
                                </CheckBoxField>
                            </div>
                            <div className="col s5 input-field">
                                <TextareaField
                                    className={this.state.class.response[2]}
                                    handleChange={this.handleChange}
                                    dataname="response2-responseText"
                                    value={this.state.value.response[2].responseText}
                                    type="text"
                                    text="Réponse 2"
                                    id={"question-answer-"+((this.count*6)+2)}
                                    icon="question_answer"
                                    textHelper="Entrez une reponse"
                                    textSuccess="Champ valide"
                                    textError="Ce champ doit être rempli"
                                />
                            </div>
                            <div className="col s1 input-field">
                                <CheckBoxField
                                    handleChange={this.handleChange}
                                    dataname="response2-isAnswer"
                                    value={this.state.value.response[2].isAnswer}>
                                    <span></span>
                                </CheckBoxField>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s5 input-field">
                                <TextareaField
                                    className={this.state.class.response[3]}
                                    handleChange={this.handleChange}
                                    dataname="response3-responseText"
                                    value={this.state.value.response[3].responseText}
                                    type="text"
                                    text="Réponse 3"
                                    id={"question-answer-"+((this.count*6)+3)}
                                    icon="question_answer"
                                    textHelper="Entrez une reponse"
                                    textSuccess="Format réponse valide"
                                    textError="Format de réponse invalide"
                                />
                            </div>
                            <div className="col s1 input-field">
                                <CheckBoxField
                                    handleChange={this.handleChange}
                                    dataname="response3-isAnswer"
                                    value={this.state.value.response[2].isAnswer}>
                                    <span></span>
                                </CheckBoxField>
                            </div>
                            <div className="col s5 input-field">
                                <TextareaField
                                    className={this.state.class.response[4]}
                                    handleChange={this.handleChange}
                                    dataname="response4-responseText"
                                    value={this.state.class.response[4].responseText}
                                    type="text"
                                    text="Réponse 4"
                                    id={"question-answer-"+((this.count*6)+4)}
                                    icon="question_answer"
                                    textHelper="Entrez une reponse"
                                    textSuccess=""
                                    textError=""
                                />
                            </div>
                            <div className="col s1 input-field">
                                <CheckBoxField
                                    handleChange={this.handleChange}
                                    dataname="response4-isAnswer"
                                    value={this.state.value.response[2].isAnswer}>
                                    <span></span>
                                </CheckBoxField>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s5 input-field">
                                <TextareaField
                                    className={this.state.class.response[5]}
                                    handleChange={this.handleChange}
                                    dataname="response5-responseText"
                                    value={this.state.class.response[5].responseText}
                                    type="text"
                                    text="Réponse 5"
                                    id={"question-answer-"+((this.count*6)+5)}
                                    icon="question_answer"
                                    textHelper="Entrez une reponse"
                                    textSuccess="Format réponse valide"
                                    textError=""
                                />
                            </div>
                            <div className="col s1 input-field">
                                <CheckBoxField
                                    handleChange={this.handleChange}
                                    dataname="response5-isAnswer"
                                    value={this.state.value.response[2].isAnswer}>
                                    <span></span>
                                </CheckBoxField>
                            </div>
                            <div className="col s5 input-field">
                                <TextareaField
                                    className={this.state.class.response[6]}
                                    handleChange={this.handleChange}
                                    dataname="response6-responseText"
                                    value={this.state.class.response[6].responseText}
                                    type="text"
                                    text="Réponse 6"
                                    id={"question-answer-"+((this.count*6)+6)}
                                    icon="question_answer"
                                    textHelper="Entrez une reponse"
                                    textSuccess="Format réponse valide"
                                    textError=""
                                />
                            </div>
                            <div className="col s1 input-field">
                                <CheckBoxField
                                    handleChange={this.handleChange}
                                    dataname="response6-isAnswer"
                                    value={this.state.value.response[2].isAnswer}>
                                    <span></span>
                                </CheckBoxField>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <span>
                        <a onClick={this.addFunction} className={"modal-close waves-effect waves-green btn-flat " + (!this.state.formValid ? " disabled" : "")}>Sauvegarder</a>
                        <a className="modal-close waves-effect btn-flat">Fermer</a>
                    </span>
                </div>
            </div>
        )
    }
}
export default FormQuestionModel