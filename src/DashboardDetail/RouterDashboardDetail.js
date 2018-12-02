import React, {Component} from 'react';
import CoursDashboardDetail from './Cours/CoursDashboardDetail';

class RouterDashboard extends Component{
    constructor(props){
        super(props);
        this.elem = props.match.params.elem;
    }

    render() {
        if(this.elem === "cours")
            return (<CoursDashboardDetail/>);
        else if(this.elem === "questionnaire")
            return (<div>fef</div>);
    }
}
export default RouterDashboard;