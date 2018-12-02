import {Component} from "react";
import React from "react";
import CoursDashboardTable from './Components/CoursDashboardTable';
import {    Link} from "react-router-dom";

class CoursDashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="row valign-wrapper">
                    <div className="col s7s">
                        <h4>Liste des cours </h4>
                    </div>
                    <div className="col s3">
                        <Link to='/dashboard/create' className="white-text waves-effect waves-light btn">
                            <i className="material-icons left">add</i>
                            NOUVEAU COURS
                       </Link>
                    </div>
                </div>
                <CoursDashboardTable/>
            </div>

        );
    }
}

export default CoursDashboard;
