import React, {Component} from "react";
import Circle from "react-circle";
import OnlineLed from "../../../Utils/OnlineLed";
import ChangeStatButton from "../../../Utils/ChangeStatButton";

class CoursNavItem extends Component {
    constructor(props) {
        super(props);
        this.clickFunction = props.clickFunction;
        this.nomCours = props.nomCours;
        this.percent = props.percent;
        this.online = (props.online === "true");
        this.coursId = props.coursId;
    }

    clickFunctionChild = () => {
        this.clickFunction(this.coursId);
    };
    render() {
        return (
            <li className="dashboard-navigation-item valign-wrapper z-depth-2 waves-effect waves-teal" onClick={this.clickFunctionChild}>
                <div className="container">
                    <div className="row">
                        <span className="nav-item-title">{this.nomCours}</span>
                        <div className="row no-margin-bottom">
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
                            <div className="col s7 nav-cours-margin-left">
                                <OnlineLed
                                    online={this.online}
                                    className="valign-wrapper"
                                />
                            </div>
                        </div>
                        <div className="row center">
                            <ChangeStatButton
                                online={this.online}
                                validText="Activer"
                                invalidText="Désactiver"
                                validIcon="publish"
                                invalidIcon="remove_circle_outline"
                                validAction={function () {console.log("zer")}}
                                invalidAction={function () {console.log("mop")}}/>
                        </div>
                    </div>
                </div>
                <div className="divider"/>
            </li>
        );
    }
}
export default CoursNavItem;