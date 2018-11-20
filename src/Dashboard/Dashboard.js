import {Component} from "react";
import React from "react";
import DashboardTable from './Components/DashboardTable';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="row valign-wrapper">
                    <div className="col s7s">
                        <h4>Liste des cours </h4>
                    </div>
                    <div className="col s3">
                        <a className="waves-effect waves-light btn"><i
                            className="material-icons left">add</i>NOUVEAU COURS</a>
                    </div>
                </div>
                <DashboardTable/>
            </div>

        );
    }
}

export default Dashboard;
