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
        if(this.state.text.length > this.state.size) {
            this.state.textToShow = this.state.text.substring(0, this.state.size);
            this.state.textToShow+="...";
            this.state.showInModal = true;
        } else {
            this.state.textToShow = this.state.text;
            this.state.showInModal = false;
        }
    }

    render() {
        return (
            <div>
                <a className="no-link" title={this.state.showInModal ? this.state.text : ""}>{this.state.textToShow}</a>
            </div>
        );
    }
}
export default TextTruncate;