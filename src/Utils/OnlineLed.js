import {Component} from "react";
import React from "react";

const onlineClass = "ledInfo green";
const offlineClass = "ledInfo red accent-4";

class OnlineLed extends Component {

    constructor(props){
        super(props);
        this.online = props.online;
    }


    render() {
        return(
            <div className="inline-content">
                <div className={this.online ? onlineClass : offlineClass}/>
                <span className="ledText">
                    {this.online ? "actif" : "non-actif"}
                </span>
            </div>
        );
    }
}
export default OnlineLed;
