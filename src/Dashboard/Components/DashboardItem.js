import React, {Component} from "react";
import AvatarDefault from '../../JustinSolov2.png'


class DashboardItem extends Component {
    constructor(props) {
        super(props);
        this.nomCours = props.nomCours;
        this.percent = props.percent;
        this.online = props.online;
    }


    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{this.nomCours}</span>
                            <p>
                                <img src={AvatarDefault} width="50"/>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardItem;