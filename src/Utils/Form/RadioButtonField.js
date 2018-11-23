import React, {Component} from "react";

class RadioButtonField extends Component{
    constructor(props){
        super(props);
        this.state = {
            handleChange : props.handleChange,
            className : props.className,
            dataName : props.dataName,
            values : props.values,
            checked : props.checked
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            handleChange: nextProps.handleChange,
            className: nextProps.className,
            dataName: nextProps.dataName,
            values: nextProps.values,
            checked : nextProps.checked
        });
    }

    render(){
        return(
            <React.Fragment>
                {this.state.values.map(value => (
                    <label className="">
                        <input valueInput={value} className={this.state.className} dataname={this.state.dataName} type="radio" onChange={this.state.handleChange}
                               checked={value === this.state.checked}
                        />
                        <span>{value}</span>
                    </label>
                    ))}
            </React.Fragment>
        );
    }
}

export default RadioButtonField;