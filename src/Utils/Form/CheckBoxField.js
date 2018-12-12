import React, {Component} from 'react';


class CheckBoxField extends Component{
    constructor(props){
        super(props);
        this.state = {
            children : props.children,
            handleChange : props.handleChange,
            defaultValue : props.hasOwnProperty("defaultvalue") ? props.defaultvalue : "",
            dataname : props.dataname
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState(
            {
                children : nextProps.children,
                handleChange : nextProps.handleChange,
                defaultValue :  nextProps.hasOwnProperty("defaultvalue") ? nextProps.defaultvalue : "",
                dataname : nextProps.dataname
            }
        );
    }

    render() {
        return (
            <label>
                <input dataname={this.state.dataname} type="checkbox" onChange={this.state.handleChange} defaultValue={this.state.defaultValue}/>
                {this.state.children}
            </label>
        );
    }
}

export default CheckBoxField;