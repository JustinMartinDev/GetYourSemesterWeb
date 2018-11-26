import React, {Component} from 'react';
import CoursNavItem from "./CoursNavItem";

class CoursNav extends Component{
    constructor(props) {
        super(props);
        this.changeContent = props.changeContent;
    }

    render() {
        return(
            <div className="dashboard-navigation">
                <ul id="slide-out" className="sidenav sidenav-fixed">
                    <CoursNavItem
                        percent="50"
                        nomCours="Questionnaire 1"
                        online="true"
                        clickFunction={this.changeContent}
                        coursId="1"
                    />
                    <CoursNavItem
                        percent="64"
                        nomCours="Questionnaire 2"
                        online="true"
                        clickFunction={this.changeContent}
                        coursId="2"
                    />
                    <CoursNavItem
                        percent="12"
                        nomCours="Questionnaire 3"
                        online="false"
                        clickFunction={this.changeContent}
                        coursId="3"
                    />
                    <CoursNavItem
                        percent="98"
                        nomCours="Questionnaire 4"
                        online="false"
                        clickFunction={this.changeContent}
                        coursId="4"
                    />
                    <CoursNavItem
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