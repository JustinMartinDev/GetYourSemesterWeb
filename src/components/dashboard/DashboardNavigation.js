import {Component} from "react";
import React from "react";
import StatsLed from "./utils/StatsLed";
import StatsButton from "./utils/StatsButton";
import Circle from 'react-circle';

class DashboardNavigation extends Component {
    render() {
        return (
            <div className="dashboard-navigation">
                <ul id="slide-out" className="sidenav sidenav-fixed">
                    <li><div className="row">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title">Cours n°1</span>
                                <div className="row valign-wrapper">
                                    <div className="col s4">
                                        <Circle
                                            animate={true} // Boolean: Animated/Static progress
                                            animationDuration="1s" //String: Length of animation
                                            size={75} // Number: Defines the size of the circle.
                                            progress={35}
                                        />
                                    </div>
                                    <div className="col s2">
                                        <StatsLed state={true}/>
                                    </div>
                                    <div className="col s6  ">
                                        <StatsButton
                                            online={true}
                                            validText="Activer"
                                            invalidText="Désactiver"
                                            validIcon="publish"
                                            invalidIcon="remvoe_circle_outline"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></li>
                    <li> <div className="row">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title">Cours n°2</span>
                                <div className="row valign-wrapper">
                                    <div className="col s4">
                                        <Circle
                                            animate={true} // Boolean: Animated/Static progress
                                            animationDuration="1s" //String: Length of animation
                                            size={75} // Number: Defines the size of the circle.
                                            progress={12}
                                        />
                                    </div>
                                    <div className="col s2">
                                        <StatsLed state={true}/>
                                    </div>
                                    <div className="col s6  ">
                                        <StatsButton
                                            online={true}
                                            validText="Activer"
                                            invalidText="Désactiver"
                                            validIcon="publish"
                                            invalidIcon="remvoe_circle_outline"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></li>
                    <li> <div className="row">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title">Cours n°2</span>
                                <div className="row valign-wrapper">
                                    <div className="col s4">
                                        <Circle
                                            animate={true} // Boolean: Animated/Static progress
                                            animationDuration="1s" //String: Length of animation
                                            size={75} // Number: Defines the size of the circle.
                                            progress={12}
                                        />
                                    </div>
                                    <div className="col s2">
                                        <StatsLed state={true}/>
                                    </div>
                                    <div className="col s6  ">
                                        <StatsButton
                                            online={true}
                                            validText="Activer"
                                            invalidText="Désactiver"
                                            validIcon="publish"
                                            invalidIcon="remvoe_circle_outline"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></li>
                    <li> <div className="row">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title">Cours n°2</span>
                                <div className="row valign-wrapper">
                                    <div className="col s4">
                                        <Circle
                                            animate={true} // Boolean: Animated/Static progress
                                            animationDuration="1s" //String: Length of animation
                                            size={75} // Number: Defines the size of the circle.
                                            progress={12}
                                        />
                                    </div>
                                    <div className="col s2">
                                        <StatsLed state={true}/>
                                    </div>
                                    <div className="col s6  ">
                                        <StatsButton
                                            online={true}
                                            validText="Activer"
                                            invalidText="Désactiver"
                                            validIcon="publish"
                                            invalidIcon="remvoe_circle_outline"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></li>
                    <li><div className="row">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title">Cours n°2</span>
                                <div className="row valign-wrapper">
                                    <div className="col s4">
                                        <Circle
                                            animate={true} // Boolean: Animated/Static progress
                                            animationDuration="1s" //String: Length of animation
                                            size={75} // Number: Defines the size of the circle.
                                            progress={12}
                                        />
                                    </div>
                                    <div className="col s2">
                                        <StatsLed state={true}/>
                                    </div>
                                    <div className="col s6  ">
                                        <StatsButton
                                            online={true}
                                            validText="Activer"
                                            invalidText="Désactiver"
                                            validIcon="publish"
                                            invalidIcon="remvoe_circle_outline"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></li>
                </ul>
                <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            </div>
        );
    }
}

export default DashboardNavigation;