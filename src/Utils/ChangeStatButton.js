import {Component} from "react";
import React from "react";

const onlineClass = "waves-effect waves-light btn-small green";
const offlineClass = "waves-effect waves-light btn-small red accent-4";

class ChangeStatButton extends Component {
    constructor(props){
        super(props);
        this.online = props.online;

        this.validIcon = props.validIcon;
        this.invalidIcon = props.invalidIcon;

        this.validText = props.validText;
        this.invalidText = props.invalidText;

        this.validAction = props.validAction;
        this.invalidAction = props.invalidAction;
    }


    render() {
        return(
            <a className={!this.online ? onlineClass : offlineClass} onClick={this.online ? this.validAction : this.invalidAction}>
                <i className="material-icons left">
                    {!this.online ? this.validIcon : this.invalidIcon}
                </i>
                {!this.online ? this.validText : this.invalidText}
            </a>
        );
    }
}

export default ChangeStatButton;