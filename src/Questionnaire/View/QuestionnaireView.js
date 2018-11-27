import React, {Component} from 'react';
import QuestionnaireNav from './Component/QuestionnaireNav'
import QuestionnaireDetail from './Component/QuestionnaireDetail';


class QuestionnaireView extends Component{
    constructor(props){
        super(props);
        this.state = {
            coursIdActive : "1"
        };

        this.changeContent = this.changeContent.bind(this);
    }

    changeContent = (coursId) => {

        this.setState({
                coursIdActive : coursId
            }
        );
    };

    render() {
        return(
            <div className="cours row">
                <div className="col s3">
                    <QuestionnaireNav
                        activeCoursId={this.state.coursIdActive}
                        changeContent={this.changeContent}
                    />
                </div>
                <div className="col s9">
                    <QuestionnaireDetail
                        coursId={this.state.coursIdActive}
                    />
                </div>
            </div>
        );
    }
}

export default QuestionnaireView;