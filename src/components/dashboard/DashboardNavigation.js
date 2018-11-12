import {Component} from "react";
import React from "react";
import DashboardNavigationItem from "./navigation/DashboardNavigationItem";

class DashboardNavigation extends Component {
    render() {
        return (
            <div className="dashboard-navigation">
                <ul id="slide-out" className="sidenav sidenav-fixed">
                    <DashboardNavigationItem
                        percent="50"
                        nomCours="Cours 1"
                        online="true"
                    />
                    <DashboardNavigationItem
                        percent="64"
                        nomCours="Cours 2"
                        online="true"
                    />
                    <DashboardNavigationItem
                        percent="12"
                        nomCours="Cours 3"
                        online="false"
                    />
                    <DashboardNavigationItem
                        percent="98"
                        nomCours="Cours 4"
                        online="false"
                    />
                    <DashboardNavigationItem
                        percent="35"
                        nomCours="Cours 5"
                        online="true"
                    />
                </ul>
                <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            </div>
        );
    }
}

export default DashboardNavigation;