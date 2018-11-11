import {Component} from "react";
import React from "react";
import DashboardNavigation from './DashboardNavigation';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard row">

                <div className="col s3">
                    <DashboardNavigation/>
                </div>

                <div className="col s9">
                </div>

            </div>

        );
    }
}

export default Dashboard;
