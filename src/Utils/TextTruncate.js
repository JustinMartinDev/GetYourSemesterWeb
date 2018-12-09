import React, {Component} from 'react';

class TextTruncate extends Component{
    constructor(props) {
        super(props);
        this.state = {
            text : props.text,
            textToShow : "",
            size : props.size,
            showInModal : ""
        };
    }

    componentWillMount() {
        const newState = this.state;
        if(this.state.text.length > this.state.size) {
            newState.textToShow = this.state.text.substring(0, this.state.size);
            newState.textToShow+="...";
            newState.showInModal = true;
        } else {
            newState.textToShow = this.state.text;
            newState.showInModal = false;
        }
        this.setState(newState);
    }
 
    render() {
        return (
            <div>
                <a href="!#" className="no-link" title={this.state.showInModal ? this.state.text : ""}>{this.state.textToShow}</a>
            </div>
        );
    }
}
export default TextTruncate;