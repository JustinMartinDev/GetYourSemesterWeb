import React, {Component} from 'react';
import {RadioButtonField} from "../../Utils/Form";
import StateInputFile from './StateInputFile';
import "../../Utils/jQueryLoading";


class AvatarPicker extends Component {
    constructor(props){
        super(props);
        this.arraySrc = {
            homme : "../images/",
            femme : "../images/"
        };

        this.state = {
            avatarChecked : props.avatarChecked
        };
        this.handleChange = props.handleChange;
    }

    render() {
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col s4">
                        <RadioButtonField
                            handleChange={this.handleChange}
                            dataName={this.state.avatarChecked}
                            checked={this.state.avatarChecked}
                            values={["homme", "femme", "personnalise"]}
                        />
                    </div>
                    <div className="col s8">
                        <StateInputFile
                            valueElement={this.state.avatarChecked}
                            valueConditionToShow="personnalise"
                            text="importer votre personnage"
                        />
                    </div>
                </div>
                <div className="row">
                    <img id="avatar-img" src={this.arraySrc[this.state.avatarChecked]} alt="your image" />
                </div>
            </React.Fragment>
        );
    }
}
export default AvatarPicker;