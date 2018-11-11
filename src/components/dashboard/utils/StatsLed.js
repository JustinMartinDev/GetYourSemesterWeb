import {Component} from "react";
import React from "react";

const onlineClass = "dashboard ledInfo light-green accent-3";
const offlineClass = "dashboard ledInfo red accent-4";

class StatsLed extends Component {

    constructor(props){
        super(props);
        this.online = props.online;
    }


    render() {
        return(
            <div className={this.online ? onlineClass : offlineClass}/>
        );
    }
}
export default StatsLed;
