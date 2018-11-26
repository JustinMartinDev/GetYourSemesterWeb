import React, {Component} from 'react';
import CoursNav from './Component/CoursNav'
import CoursDetail from './Component/CoursDetail';


class CoursView extends Component{
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
                    <CoursNav
                        activeCoursId={this.state.coursIdActive}
                        changeContent={this.changeContent}
                    />
                </div>
                <div className="col s9">
                    <CoursDetail
                        coursId={this.state.coursIdActive}
                    />
                </div>
            </div>
        );
    }
}

export default CoursView;