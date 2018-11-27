import React, {Component} from 'react';
import TableQuestionElement from "./TableQuestionElement";

class TableQuestion extends Component {
    constructor(props){
        super(props);
        this.state = {
            coursId : props.coursId
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            coursId : nextProps.coursId
        });
    }

    render() {
        return (
            <table className="striped responsive-table">
                <thead>
                    <tr>
                        <th>Etat</th>
                        <th>Titre</th>
                        <th>Nb questionnaires</th>
                        <th>Nb parties</th>
                        <th>Moyenne</th>
                        <th>Edition</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody className="table-dashboard">
                    <TableQuestionElement
                        questionnaireId={"azer1afXfzef51e"}
                    />
                    <TableQuestionElement
                        questionnaireId={"zefzef89DZE"}
                    />
                    <TableQuestionElement
                        questionnaireId={"tezmokzjf88"}
                    />
                    <TableQuestionElement
                        questionnaireId={"azer1afXfzef51e"}
                    />
                    <TableQuestionElement
                        questionnaireId={"azer1afXfzef51e"}
                    />
                </tbody>
            </table>
        );
    }
}
export default TableQuestion