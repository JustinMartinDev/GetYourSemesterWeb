import React, {Component} from 'react';
import CoursNavItem from "./CoursNavItem";

class CoursNav extends Component{
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
                    <CoursNavItem
                        isActive={(this.state.activeCoursId === "1")}
                        percent="50"
                        nomCours="Questionnaire 1"
                        online="true"
                        clickFunction={this.changeContent}
                        coursId="1"
                    />
                    <CoursNavItem
                        isActive={(this.state.activeCoursId === "2")}
                        percent="64"
                        nomCours="Questionnaire 2"
                        online="true"
                        clickFunction={this.changeContent}
                        coursId="2"
                    />
                    <CoursNavItem
                        isActive={(this.state.activeCoursId === "3")}
                        percent="12"
                        nomCours="Questionnaire 3"
                        online="false"
                        clickFunction={this.changeContent}
                        coursId="3"
                    />
                    <CoursNavItem
                        isActive={(this.state.activeCoursId === "4")}
                        percent="98"
                        nomCours="Questionnaire 4"
                        online="false"
                        clickFunction={this.changeContent}
                        coursId="4"
                    />
                    <CoursNavItem
                        isActive={(this.state.activeCoursId === "5")}
                        percent="35"
                        nomCours="Cours 5"
                        online="true"
                        clickFunction={this.changeContent}
                        coursId="5"
                    />
                </ul>
                <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            </div>
        );
    }
}
export default CoursNav;