import React, {Component} from 'react';
import FormQuestion from "./FormQuestion";
import FormQuestionModel from "./FormQuestionModel";

class ListeQuestionnaire extends Component{
    constructor(props){
        super(props);
        this.state = {
            isValid : true,
            questions : []
        };

        this.count = 0;

        this.parentInvalid = props.parentInvalid;
        this.validQuestions = props.validQuestions;
        this.handleQuestion = this.handleQuestion.bind(this);
        this.handleAddFunction = this.handleAddFunction.bind(this);
    }

    handleAddFunction(question){
        console.log("call add");
        let newState = this.state;
        newState.questions.push(
            question
        );

        this.setState( {
            newState
        });
    }
    handleQuestion(question, count){
        console.log("call handle question");
        let newState = this.state;
        newState.questions[count] = question;
        this.setState({
            newState
        });
    }
    invalidForm = () => {
        console.log("setting invalid");
        this.setState({
            isValid : false
        });
    };

    render() {
        return (
            <div>
                <ul className="collapsible popout questionnaire">
                    {this.state.questions.map((question,id) =>
                        (<FormQuestion
                            key={id}
                            invalidForm={this.invalidForm}
                            count={this.count++}
                            questionValue={question}
                            handleQuestion={this.handleQuestion}/>))}
                </ul>
                <button data-target="modal-question-create-form" className={"modal-trigger btn-small low-margin-top mx-auto waves-effect waves-light" + (!this.state.isValid ? " disabled" : "")}>
                    Ajouter une question
                    <i className="material-icons right">add</i>
                </button>
                <FormQuestionModel
                    handleAddFunction={this.handleAddFunction}
                />
            </div>
        )
    }
}

export default ListeQuestionnaire;