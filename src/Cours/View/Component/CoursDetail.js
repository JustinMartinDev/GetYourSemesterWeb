import React, {Component} from 'react';
import Circle from "react-circle";
import JustinSolov2 from "../../../JustinSolov2.png"

class CoursDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {
            coursId : props.coursId
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            coursId : nextProps.coursId
            }
        );
    }

    render() {
        return(
            <div className="bg-white">
                <div className="row center valign-wrapper">
                    <div className="col s3">
                        <span className="nav-item-title">Title</span>
                    </div>
                    <div className="col s4 offset-s5">
                        <span className="">25/69/1999</span>
                    </div>
                </div>
                <div className="row center valign-wrapper">
                    <div className="col s5 offset-s1">
                        <textarea type="textarea" id="id-description" className="materialize-textarea no-padding" defaultValue="zerijuohizerzeizjoeuirozerjpozerjieohruorizherozeorhezr" readOnly="true"/>
                    </div>
                    <div className="col s4 offset-s2">
                        <div className="row valign-wrapper">
                            <div className="col s4 offset-s1">
                                <span>10/10</span>
                                <Circle
                                    animate={true} // Boolean: Animated/Static progress
                                    animationDuration="1s" //String: Length of animation
                                    size={50} // Number: Defines the size of the circle.
                                    progress={80}
                                    textStyle={{
                                        font: 'bold 100px Helvetica, Arial, sans-serif' // CSSProperties: Custom styling for percentage.
                                    }}
                                />
                            </div>
                            <div className="col s3 offset-s1">
                                <span>5/10</span>
                                <Circle
                                    animate={true} // Boolean: Animated/Static progress
                                    animationDuration="1s" //String: Length of animation
                                    size={50} // Number: Defines the size of the circle.
                                    progress={24        }
                                    textStyle={{
                                        font: 'bold 100px Helvetica, Arial, sans-serif' // CSSProperties: Custom styling for percentage.
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row valign-wrapper">
                    <div className="col s4 offset-s1 valign-wrapper">
                        <span>M Prof</span>
                        <img src={JustinSolov2} alt="avatar" className="img-size-low low-margin-left"/>
                    </div>
                    <div className="col s8 valign-wrapper offset-s4">
                        <a className="waves-effect waves-light btn-small"><i className="material-icons left">add</i>Questionnaire</a>
                        <a className="waves-effect waves-light red btn-small low-margin-left"><i className="material-icons left">delete_forever</i>Cours</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default CoursDetail;