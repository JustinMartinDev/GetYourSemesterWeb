import React, {Component} from "react";

class RadioButtonField extends Component{
    constructor(props){
        super(props);
        this.state = {
            handleChange : props.handleChange,
            className : props.className,
            dataname : props.dataname,
            values : props.values,
            checked : props.checked,
            labelClassName : props.labelClassName
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            handleChange: nextProps.handleChange,
            className: nextProps.className,
            dataname: nextProps.dataname,
            values: nextProps.values,
            checked : nextProps.checked
        });
    }

    render(){
        return(
            <React.Fragment>
                {this.state.values.map(value => (
                    <label className={this.state.labelClassName}>
                        <input valueInput={value} className={this.state.className} dataname={this.state.dataname} type="radio" onChange={this.state.handleChange}
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