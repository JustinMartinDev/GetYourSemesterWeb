import React, {Component} from 'react';


class CheckBoxField extends Component{
    constructor(props){
        super(props);
        this.state = {
            children : props.children,
            handleChange : props.handleChange,
            value : props.value,
            dataname : props.dataname
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState(
            {
                children : nextProps.children,
                handleChange : nextProps.handleChange,
                value : nextProps.value,
                dataname : nextProps.dataname
            }
        );
    }

    render() {
        return (
            <label>
                <input dataname={this.state.dataname} type="checkbox" onChange={this.state.handleChange} value={this.state.value}/>
                {this.state.children}
            </label>
        );
    }
}

export default CheckBoxField;