import React, {Component} from 'react';
import CoursDashboardNav from './Component/CoursDashboardNav'
import CoursDashboardDetail from './Component/CoursDashboardDetail';


class CoursDashboardView extends Component{
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
                    <CoursDashboardNav
                        activeCoursId={this.state.coursIdActive}
                        changeContent={this.changeContent}
                    />
                </div>
                <div className="col s9">
                    <CoursDashboardDetail
                        coursId={this.state.coursIdActive}
                    />
                </div>
            </div>
        );
    }
}

export default CoursDashboardView;