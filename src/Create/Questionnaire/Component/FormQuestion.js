import React, {Component, forwardRef} from 'react'
import {TextareaField, InputField, CheckBoxField} from "../../../Utils/Form";
import * as ValidationFunctions from "../../../Utils/Form/ValidationFunctions";


class FormQuestion extends Component{
    constructor(props) {
        super(props);
        if(props.hasOwnProperty("questionValue"))
            this.state = props.questionValue;
        else
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
                        6: "materialize-textarea ",
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
                isCreation : props.isCreation,
                formValid : false
            };

        this.count = props.count;
        this.parentChange = props.handleQuestion;
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let dataName = event.target.getAttribute("dataname");
        let newState = this.state;
        const value = (event.target.hasOwnProperty("checked") ? event.target.checked : event.target.value);

        if(!dataName.includes("-"))
            newState = ValidationFunctions.checkValidateWithSize(newState, value, dataName, 1);
        else {
            dataName = dataName.split("-");
            const responseId = (dataName[0].substring(8, dataName[0].length));
            if(dataName[1]==="responseText") {
                if (responseId <= 2)
                    newState = ValidationFunctions.checkValidateWithSizeTabSecondKey(newState, value, "response", responseId, 1, dataName[1]);
                else
                    newState.value["response"][responseId].responseText = value;
            }
            else newState.value["response"][responseId].isAnswer = value;
        }

        newState.formValid = newState.valid.questionTitle;
        newState.formValid &= ValidationFunctions.checkValidTab(newState, "response");
        newState.formValid &= FormQuestion.ValidNbAnswer(newState);

        this.setState(newState);

        if(newState.formValid)
            this.parentChange(newState.value, this.count);
    }

    static ValidNbAnswer(newState) {
        let nb = 0;

        let size = newState.value.response.length;

        for(let i=0; i<size; i++)
            if(newState.response[i].isAnswer)
              nb++;

        return nb >= 2;

    }

    render() {
        return(
            <li>
                <div className="collapsible-header">
                    <i className="material-icons">assignment</i>{this.state.isCreation ? "Créer une nouvelle question" : this.state.questionTitle}
                </div>
                <div className="collapsible-body bg-white">
                    <div className="row">
                        <div className="col s8 input-field">
                            <InputField
                                className={this.state.class.questionTitle}
                                handleChange={this.handleChange}
                                dataName="questionTitle"
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
                                    dataName="response1-responseText"
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
                                    dataName="response1-isAnswer"
                                    value={this.state.value.response[2].isAnswer}>
                                    <span></span>
                                </CheckBoxField>
                            </div>
                            <div className="col s5 input-field">
                                <TextareaField
                                    className={this.state.class.response[2]}
                                    handleChange={this.handleChange}
                                    dataName="response2-responseText"
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
                                    dataName="response2-isAnswer"
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
                                    dataName="response3-responseText"
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
                                    dataName="response3-isAnswer"
                                    value={this.state.value.response[2].isAnswer}>
                                    <span></span>
                                </CheckBoxField>
                            </div>
                            <div className="col s5 input-field">
                                <TextareaField
                                    className={this.state.class.response[4]}
                                    handleChange={this.handleChange}
                                    dataName="response4-responseText"
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
                                    dataName="response4-isAnswer"
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
                                    dataName="response5-responseText"
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
                                    dataName="response5-isAnswer"
                                    value={this.state.value.response[2].isAnswer}>
                                    <span></span>
                                </CheckBoxField>
                            </div>
                            <div className="col s5 input-field">
                                <TextareaField
                                    className={this.state.class.response[6]}
                                    handleChange={this.handleChange}
                                    dataName="response6-responseText"
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
                                    dataName="response6-isAnswer"
                                    value={this.state.value.response[2].isAnswer}>
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