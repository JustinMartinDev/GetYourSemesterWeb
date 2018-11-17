import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class StateBox extends Component{
    constructor(props) {
        super(props);
        this.state = {
            classColor : props.classColor,
            icon : props.icon,
            text : props.text,
            title : props.title,
            valueElement : props.valueElement,
            valueConditionToShow : props.valueConditionToShow
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState(
            this.state = {
                classColor : nextProps.classColor,
                icon : nextProps.icon,
                text : nextProps.text,
                title : nextProps.title,
                valueElement : nextProps.valueElement,
                valueConditionToShow : nextProps.valueConditionToShow
            }
        );
    }

    render(){
            return (
                <div className=
                 {"row scale-transition " +
                 (this.state.valueElement === this.state.valueConditionToShow ?
                    "scale-in" :
                    "scale-out")
                }>
                    <div className={"col s6 border-raduis " + this.state.classColor}>
                        <div className="col s1">
                            <i className="material-icons">{this.state.icon}</i>
                        </div>
                        <div className="col s11">
                            <span><b>{this.state.title} : </b> {this.state.text}</span>
                        </div>
                    </div>
                </div>
            );
    }

}

export default StateBox;