import React, {Component} from 'react';


class InputField extends Component{
    constructor(props){
        super(props);
        this.option = {
            icon : props.icon,
            handleChange : props.handleChange,
            type : props.type,
            id : props.id,
            className : props.className,
            text : props.text,
            dataName : props.dataName,
            textError : props.textError,
            textSuccess : props.textSuccess,
            textHelper : props.textHelper
        };
    }

    render(){
        return(
            <div className="row">
                <div className="input-field col s6">
                    <i className="material-icons prefix">{this.option.icon}</i>
                    <input dataName={this.option.dataName} id={this.option.id} type={this.option.type} className={this.option.className} onChange={this.option.handleChange}/>
                    <label htmlFor={this.option.id}>{this.option.text}</label>
                    <span className="helper-text" data-error={this.option.textError} data-success={this.option.textSuccess}>{this.option.textHelper}</span>
                </div>
            </div>
        );
    }
}

export default InputField;