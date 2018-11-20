import {Component} from "react";
import React from "react";

class StatsButton extends Component {
    constructor(props){
        super(props);
        this.online = props.online;

        this.validIcon = props.validIcon;
        this.invalidIcon = props.invalidIcon;

        this.validText = props.validText;
        this.invalidText = props.invalidText;
    }


    render() {
        return(
        <a className="waves-effect waves-light btn-small">
            <i className="material-icons left">
                {this.online ? this.validIcon : this.invalidIcon}
            </i>
            {this.online ? this.validText : this.invalidText}
        </a>);
    }
}

export default StatsButton;