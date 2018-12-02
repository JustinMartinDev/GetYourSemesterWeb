import React, {Component} from 'react';
import CoursDashboard from './Cours/CoursDashboard';

class RouterDashboard extends Component{
    constructor(props){
        super(props);
        this.elem = props.match.params.elem;
    }

    render() {
        if(this.elem === "cours")
            return (<CoursDashboard/>);
        else if(this.elem === "questionnaire")
            return (<div>fef</div>);
    }
}
export default RouterDashboard;