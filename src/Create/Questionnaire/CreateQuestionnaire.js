import React, {Component} from "react";
import FormQuestionnaire from "./Component/FormQuestionnaire";

class CreateQuestionnaire extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container">
                <div className="row center">
                    <h4>Créer un cours</h4>
                </div>
                <div className="row">
                    <FormQuestionnaire/>
                </div>
            </div>
        );
    }
}

export default CreateQuestionnaire;