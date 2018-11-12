import Circle from "react-circle";
import StatsLed from "../utils/StatsLed";
import StatsButton from "../utils/StatsButton";
import React, {Component} from "react";

class DashboardNavigationItem extends Component {
    constructor(props) {
        super(props);
        this.nomCours = props.nomCours;
        this.percent = props.percent;
        this.online = props.online;
    }


    render() {
        return (
            <li className="dashboard-navigation-item">
                <div className="container">
                    <div className="row">
                        <span>{this.nomCours}</span>
                        <div className="row valign-wrapper">
                            <div className="col s3">
                                <Circle
                                    animate={true} // Boolean: Animated/Static progress
                                    animationDuration="1s" //String: Length of animation
                                    size={50} // Number: Defines the size of the circle.
                                    progress={this.percent}
                                    textStyle={{
                                        font: 'bold 100px Helvetica, Arial, sans-serif' // CSSProperties: Custom styling for percentage.
                                    }}
                                />
                            </div>
                            <div className="col s2">
                                <StatsLed state={this.online}/>
                            </div>
                            <div className="col s7  ">
                                <StatsButton
                                    online={this.online}
                                    validText="Activer"
                                    invalidText="Désactiver"
                                    validIcon="publish"
                                    invalidIcon="remove_circle_outline"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
            </li>
        );
    }
}

export default DashboardNavigationItem;