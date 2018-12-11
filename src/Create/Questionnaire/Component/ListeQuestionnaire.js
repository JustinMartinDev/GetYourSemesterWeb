import React, {Component} from 'react';
import FormQuestion from "./FormQuestion";
import FormQuestionModel from "./FormQuestionModel";

class ListeQuestionnaire extends Component{
    constructor(props){
        super(props);
        this.state = {
            isValid : false,
            questions : []
        };

        this.count = 0;

        this.validQuestions = props.validQuestions;
        this.handleQuestion = this.handleQuestion.bind(this);
        this.handleAddFunction = this.handleAddFunction.bind(this);
    }

    handleAddFunction(question){
        console.log(question);
        let newState = this.state;
        newState.questions.push(
            question
        );

        this.setState( {
            newState
        });
    }

    handleQuestion(question, count){
        this.state.questions[count] = question;
    }

    render() {
        return (
            <React.Fragment>
                <ul className="collapsible popout questionnaire">
                    {this.state.questions.map(question =>
                        (<FormQuestion
                            count={this.count++}
                            questionValue={question}
                            handleQuestion={this.handleQuestion}/>))}
                </ul>
                <button data-target="modal-question-create-form" className={"modal-trigger btn-small low-margin-top mx-auto waves-effect waves-light" + (!true ? " disabled" : "")}>
                    Ajouter une question
                    <i className="material-icons right">add</i>
                </button>
                <FormQuestionModel
                    handleAddFunction={this.handleAddFunction}
                />
            </React.Fragment>
        )
    }
}

export default ListeQuestionnaire;