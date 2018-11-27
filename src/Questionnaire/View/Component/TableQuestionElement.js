import React, {Component} from 'react';
import OnlineLed from "../../../Utils/OnlineLed";
import {Circle} from "react-circle";
import TextTruncate from "../../../Utils/TextTruncate";

class TableQuestionElement extends Component{
    constructor(props) {
        super(props);
        this.state = {
            questionnaireId: props.questionnaireId,
        }
    }

    render() {
        return(
            <tr>
                <td>
                    <OnlineLed
                        online={("true" === "true")}
                        className="valign-wrapper"
                    />
                </td>
                <td>
                    <TextTruncate
                        text="MyRandomTitleQuestionnaire"
                        size="13"
                    />
                </td>
                <td>12</td>
                <td>142</td>
                <td>
                    <Circle
                        animate={true} // Boolean: Animated/Static progress
                        animationDuration="1s" //String: Length of animation
                        size={50} // Number: Defines the size of the circle.
                        progress={88}
                        textStyle={{
                            font: 'bold 100px Helvetica, Arial, sans-serif' // CSSProperties: Custom styling for percentage.
                        }}
                    />
                </td>
                <td>
                    <a className="btn-floating btn-large waves-effect waves-light primary-color"><i
                        className="material-icons">edit</i></a>
                </td>
                <td>
                    <a className="btn-floating btn-large waves-effect waves-light red low"><i
                        className="material-icons">delete_forever</i></a>
                </td>
            </tr>
        )
    }
}

export default TableQuestionElement;