import React, {Component} from 'react';


class InputField extends Component{
    constructor(props){
        super(props);
        this.state = {
            icon : props.icon,
            handleChange : props.handleChange,
            type : props.type,
            id : props.id,
            className : props.className,
            text : props.text,
            dataname : props.dataname,
            textError : props.textError,
            textSuccess : props.textSuccess,
            textHelper : props.textHelper
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState(
            {
                icon : nextProps.icon,
                handleChange : nextProps.handleChange,
                type : nextProps.type,
                id : nextProps.id,
                className : nextProps.className,
                text : nextProps.text,
                dataname : nextProps.dataname,
                textError : nextProps.textError,
                textSuccess : nextProps.textSuccess,
                textHelper : nextProps.textHelper
            }
        );
    }
    render(){
        return(
            <React.Fragment>
                <i className="material-icons prefix">{this.state.icon}</i>
                <input dataname={this.state.dataname} id={this.state.id} type={this.state.type} className={this.state.className} onChange={this.state.handleChange}/>
                <label htmlFor={this.state.id}>{this.state.text}</label>
                <span className="helper-text" data-error={this.state.textError} data-success={this.state.textSuccess}>{this.state.textHelper}</span>
            </React.Fragment>
        );
    }
}

export default InputField;