import React, {Component} from 'react';
import "./StateBox.css";

class StateBox extends Component{
    constructor(props) {
        super(props);
        this.state = {
            classColor : props.classColor,
            icon : props.icon,
            text : props.text,
            title : props.title,
            valueElement : props.valueElement,
            valueConditionToShow : props.valueConditionToShow,
            child : props.children,
            colSize : props.colSize
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
                classColor : nextProps.classColor,
                icon : nextProps.icon,
                text : nextProps.text,
                title : nextProps.title,
                valueElement : nextProps.valueElement,
                valueConditionToShow : nextProps.valueConditionToShow,
                child : nextProps.children,
                colSize : nextProps.colSize
            }
        );
    }

    render(){
            return (
                <div className=
                 {"row scale-transition low-margin-bottom " +
                 (this.state.valueElement === this.state.valueConditionToShow ?
                    "scale-in" :
                    "scale-out")
                }>
                    <div className={"col s"+(this.state.colSize)+" border-raduis "+(this.state.classColor)}>
                        <div className="col s1">
                            <i className="low-padding-left material-icons">{this.state.icon}</i>
                        </div>
                        <div className="col s11">
                            <span><b>{this.state.title} : </b></span>
                            {this.state.child}
                        </div>
                    </div>
                </div>
            );
    }

}

export default StateBox;