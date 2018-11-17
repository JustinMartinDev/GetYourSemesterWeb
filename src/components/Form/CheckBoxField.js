import React, {Component} from 'react';


class CheckBoxField extends Component{
    constructor(props){
        super(props);
        this.state = {
            children : props.children,
            handleChange : props.handleChange,
            value : props.value,
            dataName : props.dataName
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState(
            {
                children : nextProps.children,
                handleChange : nextProps.handleChange,
                value : nextProps.value,
                dataName : nextProps.dataName
            }
        );
    }

    render() {
        return (
            <label>
                <input dataName={this.state.dataName} type="checkbox" onChange={this.state.handleChange} value={this.state.value}/>
                {this.state.children}
            </label>
        );
    }
}

export default CheckBoxField;