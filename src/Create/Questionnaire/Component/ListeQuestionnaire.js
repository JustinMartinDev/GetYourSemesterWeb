import React, {Component} from 'react';
import FormQuestion from "./FormQuestion";

class ListeQuestionnaire extends Component{
    constructor(props){
        super(props);
        this.state = {
            isValid : false
        };

        this.questions = [];
        this.count = 0;

        this.validQuestions = props.validQuestions;
        this.handleQuestion = this.handleQuestion.bind(this);
    }

    handleQuestion(question, count){
        console.log(count);
        this.questions[count] = question;
        console.log(this.questions);
    }

    render() {
        return(
            <ul className="collapsible popout">
                {this.questions.map(question =>
                    (<FormQuestion
                        count={this.count++}
                        questionValue={question}
                        handleQuestion={this.handleQuestion}/>))}
                <FormQuestion
                    count={this.count++}
                    isCreation={true}
                    handleQuestion={this.handleQuestion}/>
                <FormQuestion
                    count={this.count++}
                    isCreation={true}
                    handleQuestion={this.handleQuestion}/>
            </ul>
        )
    }
}

export default ListeQuestionnaire;