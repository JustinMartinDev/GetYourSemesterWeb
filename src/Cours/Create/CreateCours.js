import React, {Component} from "react";
import FormCours from "./Component/FormCours";

class CreateCours extends Component {
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
                    <FormCours/>
                </div>
            </div>
        );
    }
}

export default CreateCours;