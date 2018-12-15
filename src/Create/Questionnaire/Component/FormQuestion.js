import React, {Component} from 'react'
import {TextareaField, InputField, CheckBoxField} from "../../../Utils/Form";
import * as ValidationFunctions from "../../../Utils/Form/ValidationFunctions";
import {StateBox} from "../../../Utils/Utils";

class FormQuestion extends Component{
    constructor(props) {
        super(props);

        this.state = {
            value : {
                questionTitle: props.questionValue.questionTitle,
                response: {
                    1: {
                        responseText: props.questionValue.response[1].responseText,
                        isAnswer: props.questionValue.response[1].isAnswer
                    },
                    2: {
                        responseText: props.questionValue.response[2].responseText,
                        isAnswer: props.questionValue.response[2].isAnswer
                    },
                    3: {
                        responseText: props.questionValue.response[3].responseText,
                        isAnswer: props.questionValue.response[3].isAnswer
                    },
                    4: {
                        responseText: props.questionValue.response[4].responseText,
                        isAnswer: props.questionValue.response[4].isAnswer
                    },
                    5: {
                        responseText: props.questionValue.response[5].responseText,
                        isAnswer: props.questionValue.response[5].isAnswer
                    },
                    6: {
                        responseText: props.questionValue.response[6].responseText,
                        isAnswer: props.questionValue.response[6].isAnswer
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

        this.count = props.count;
        this.parentChange = props.handleQuestion;
        this.invalidForm = props.invalidForm;
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log("call handle change question form");
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

        newState.formValid &= FormQuestion.ValidNbAnswer(newState);
        if(!newState.formValid)
            newState.messageInfo.push("Vous devez au moins indiquer une bonne réponse");

        console.log("change form question call");
        this.setState(newState);

        if(newState.formValid)
            this.parentChange(newState.value, this.count);

        if(!newState.formValid)
            this.invalidForm();
    }

    static ValidNbAnswer(newState) {
        let nb = 0;
        let size = 0;

        for(var property in newState.value.response) {
            console.log(property);
            size++;
        }

        for(let i=1; i<size+1; i++) {
            if (newState.value.response[i].isAnswer)
                nb++;
        }

        return nb > 0;

    }

/*    showToastError = (event) => {
        event.stopPropagation();
        this.state.messageInfo.map(message =>{
            window.Materialize.toast(message, 3000);
        });
    };*/

    render() {
        const condError = (this.state.messageInfo.length === 0 ? "validate" : "error");
        return(
            <li>
                <div className="collapsible-header">
                    <i className="material-icons">assignment</i>{this.state.value.questionTitle}
                    <i className={(condError === "validate" ? "green-text" : "red-text") + " material-icons"} >{condError === "validate" ? "done_outline" : "error_outline"}</i>
                </div>
                <div className="collapsible-body bg-white">
                    <div className="row un-margin-top-30">
                        <div className="col s8">
                            <StateBox
                                valueElement={condError}
                                valueConditionToShow="error"
                                colSize="12"
                                classColor="error-border state-box-col"
                                icon="error"
                                title="Error">
                                <ul>
                                    {this.state.messageInfo.map((message, id)=> (
                                        <li key={id}>{message}</li>
                                    ))}
                                </ul>
                            </StateBox>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col s8 input-field">
                            <InputField
                                className={this.state.class.questionTitle}
                                handleChange={this.handleChange}
                                dataname="questionTitle"
                                defaultvalue={this.state.value.questionTitle}
                                type="text"
                                text="Question"
                                id="question-title-input"
                                icon="title"
                                textHelper="Entrez un titre"
                                textSuccess="titre valide"
                                textError="Ce champ ne peut être vide"
                                shouldLoadVerif={true}
                            />
                        </div>
                        <div className="row">
                            <div className="col s5 input-field">
                                <TextareaField
                                    className={this.state.class.response[1]}
                                    handleChange={this.handleChange}
                                    dataname="response1-responseText"
                                    defaultvalue={this.state.value.response[1].responseText}
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
                                    defaultvalue={this.state.value.response[2].isAnswer}>
                                    <span></span>
                                </CheckBoxField>
                            </div>
                            <div className="col s5 input-field">
                                <TextareaField
                                    className={this.state.class.response[2]}
                                    handleChange={this.handleChange}
                                    dataname="response2-responseText"
                                    defaultvalue={this.state.value.response[2].responseText}
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
                                    defaultvalue={this.state.value.response[2].isAnswer}>
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
                                    defaultvalue={this.state.value.response[3].responseText}
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
                                    defaultvalue={this.state.value.response[2].isAnswer}>
                                    <span></span>
                                </CheckBoxField>
                            </div>
                            <div className="col s5 input-field">
                                <TextareaField
                                    className={this.state.class.response[4]}
                                    handleChange={this.handleChange}
                                    dataname="response4-responseText"
                                    defaultvalue={this.state.class.response[4].responseText}
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
                                    defaultvalue={this.state.value.response[2].isAnswer}>
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
                                    defaultvalue={this.state.class.response[5].responseText}
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
                                    defaultvalue={this.state.value.response[2].isAnswer}>
                                    <span></span>
                                </CheckBoxField>
                            </div>
                            <div className="col s5 input-field">
                                <TextareaField
                                    className={this.state.class.response[6]}
                                    handleChange={this.handleChange}
                                    dataname="response6-responseText"
                                    defaultvalue={this.state.class.response[6].responseText}
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
                                    defaultvalue={this.state.value.response[2].isAnswer}>
                                    <span></span>
                                </CheckBoxField>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        )
    }

}
export default FormQuestion