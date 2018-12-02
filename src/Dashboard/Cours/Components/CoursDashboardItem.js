import React, {Component} from "react";
import AvatarDefault from '../../../JustinSolov2.png'
import {Circle} from "react-circle";
import OnlineLed from "../../../Utils/OnlineLed";
import ChangeStatButton from "../../../Utils/ChangeStatButton";

class CoursDashboardItem extends Component {
    constructor(props) {
        super(props);
        this.nomCours = props.nomCours;
        this.percent = props.percent;
        this.online = (props.online === "true");
        console.log(this.online);
    }


    render() {
        return (
            <div className="row wow fadeIn">
                <div className="col s12">
                    <div className="card white darken-1">
                        <div className="card-content">
                            <span className="card-title">{this.nomCours}</span>
                            <div>
                                <div className="row valign-wrapper low-margin-bottom center-align">
                                    <div className="col s1">
                                        <img src={AvatarDefault} width="50"/>
                                    </div>
                                    <div className="col s2">
                                        <Circle progress={this.percent}/>
                                    </div>
                                    <div className="col s2">
                                        <OnlineLed online={this.online}/>
                                    </div>
                                    <div className="col s3">
                                        <ChangeStatButton
                                            online={this.online}
                                            validIcon="visibility"
                                            invalidIcon="visibility_off"
                                            validText="Activer"
                                            invalidText="Désactiver"
                                            validAction={function(){console.log("validAction");}}
                                            invalidAction={function(){console.log("invalidAction");}}
                                        />
                                    </div>
                                    <div className="col s3">
                                        <a className="waves-effect waves-light btn-small" onClick="">
                                            Questionnaire
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CoursDashboardItem;