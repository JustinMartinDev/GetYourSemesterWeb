import React, {Component} from "react";
import Circle from "react-circle";
import OnlineLed from "../../../Utils/OnlineLed";
import JustinSolov2 from "../../../JustinSolov2.png"
import ChangeStatButton from "../../../Utils/ChangeStatButton";

class   CoursDashboardNavItem extends Component {
    constructor(props) {
        super(props);
        this.clickFunction = props.clickFunction;

        console.log(props);
        this.state = {
            nomCours: props.nomCours,
            percent: props.percent,
            online: (props.online === "true"),
            coursId: props.coursId,
            isActive: props.isActive
        }
    }


    componentWillReceiveProps(nextProps) {
        this.setState({
                nomCours: nextProps.nomCours,
                percent: nextProps.percent,
                online: (nextProps.online === "true"),
                coursId: nextProps.coursId,
                isActive: nextProps.isActive
            }
        );
    }

    clickFunctionChild = () => {
        this.clickFunction(this.state.coursId);
    };
    render() {
        return (
            <li className={"dashboard-navigation-item valign-wrapper z-depth-2 waves-effect waves-grey " + (this.state.isActive ? "grey lighten-2" : "")} onClick={this.clickFunctionChild}>
                <div className="container">
                    <div className="row">
                        <span className="nav-item-title">{this.state.nomCours}</span>
                        <div className="row no-margin-bottom">
                            <div className="col s3">
                                <Circle
                                    animate={true} // Boolean: Animated/Static progress
                                    animationDuration="1s" //String: Length of animation
                                    size={50} // Number: Defines the size of the circle.
                                    progress={this.state.percent}
                                    textStyle={{
                                        font: 'bold 100px Helvetica, Arial, sans-serif' // CSSProperties: Custom styling for percentage.
                                    }}
                                />
                            </div>
                            <div className="col s7 nav-margin-left">
                                <OnlineLed
                                    online={this.state.online}
                                    className="valign-wrapper"
                                />
                            </div>
                            <div className="col s2">
                                <img src={JustinSolov2}/>
                            </div>
                        </div>
                        <div className="row center">
                            <ChangeStatButton
                                online={this.state.online}
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
export default CoursDashboardNavItem;