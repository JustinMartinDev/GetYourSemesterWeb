import React, {Component} from 'react';

class InputFileBox extends Component{
    constructor(props) {
        super(props);
        this.state = {
            valueElement : props.valueElement,
            valueConditionToShow : props.valueConditionToShow,
        };

        this.changeImage =props.changeImage;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
                valueElement : nextProps.valueElement,
            }
        );
    }

    render(){
        return (
            <div className=
                {"row scale-transition low-margin-bottom " +
                    (this.state.valueElement === this.state.valueConditionToShow ? "scale-in" : "scale-out")}>
                <div className="file-field input-field">
                    <div className="btn">
                        <span>Choisir un fichier</span>
                        <input type="file" onChange={(e)=>this.changeImage(e)}/>
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" placeholder="Upload your avatar"/>
                    </div>
                </div>
            </div>
        );
    }

}

export default InputFileBox;