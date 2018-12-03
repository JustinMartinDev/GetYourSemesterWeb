import React, {Component} from 'react';
import CoursDashboardNavItem from "./CoursDashboardNavItem";

class CoursDashboardNav extends Component{
    constructor(props) {
        super(props);
        this.changeContent = props.changeContent;
        this.state = {
            activeCoursId : props.activeCoursId
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
                activeCoursId : nextProps.activeCoursId
            }
        );
    }

    render() {
        return(
            <div className="dashboard-navigation">
                <ul id="slide-out" className="sidenav sidenav-fixed">
                    <CoursDashboardNavItem
                        isActive={(this.state.activeCoursId === "1")}
                        percent="50"
                        nomCours="Cours 1"
                        online="true"
                        clickFunction={this.changeContent}
                        coursId="1"
                    />
                    <CoursDashboardNavItem
                        isActive={(this.state.activeCoursId === "2")}
                        percent="64"
                        nomCours="Cours 2"
                        online="true"
                        clickFunction={this.changeContent}
                        coursId="2"
                    />
                    <CoursDashboardNavItem
                        isActive={(this.state.activeCoursId === "3")}
                        percent="12"
                        nomCours="Cours 3"
                        online="false"
                        clickFunction={this.changeContent}
                        coursId="3"
                    />
                    <CoursDashboardNavItem
                        isActive={(this.state.activeCoursId === "4")}
                        percent="98"
                        nomCours="Cours 4"
                        online="false"
                        clickFunction={this.changeContent}
                        coursId="4"
                    />
                    <CoursDashboardNavItem
                        isActive={(this.state.activeCoursId === "5")}
                        percent="35"
                        nomCours="Cours 5"
                        online="true"
                        clickFunction={this.changeContent}
                        coursId="5"
                    />
                </ul>
            </div>
        );
    }
}
export default CoursDashboardNav;