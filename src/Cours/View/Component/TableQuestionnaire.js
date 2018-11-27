import React, {Component} from 'react';
import TableQuestionnaireElement from "./TableQuestionnaireElement";

class TableQuestionnaire extends Component {
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
                    <TableQuestionnaireElement
                        questionnaireId={"azer1afXfzef51e"}
                    />
                    <TableQuestionnaireElement
                        questionnaireId={"zefzef89DZE"}
                    />
                    <TableQuestionnaireElement
                        questionnaireId={"tezmokzjf88"}
                    />
                    <TableQuestionnaireElement
                        questionnaireId={"azer1afXfzef51e"}
                    />
                    <TableQuestionnaireElement
                        questionnaireId={"azer1afXfzef51e"}
                    />
                </tbody>
            </table>
        );
    }
}
export default TableQuestionnaire