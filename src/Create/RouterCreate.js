import React, {Component} from 'react';
import CreateCours from './Cours/CreateCours';
import CreateQuestionnaire from './Questionnaire/CreateQuestionnaire'

class RouterCreate extends Component{
    constructor(props){
        super(props);
        this.elem = props.match.params.elem;
    }

    render() {
        if(this.elem === "cours")
            return (<CreateCours/>);
        else if(this.elem === "questionnaire")
            return (<CreateQuestionnaire/>);
    }
}
export default RouterCreate;