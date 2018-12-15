import React, {Component} from "react";
import { Link } from 'react-router-dom';

class TestComponent extends Component {
    render(){
        return(
           <div>
               <h2><Link to="/create/cours">Create cours</Link></h2>
               <h2><Link to="/create/questionnaire">Create questionnaire</Link></h2>
               <h2><Link to="/dashboard/cours">Dashboard cours</Link></h2>
               <h2><Link to="/dashboard-detail/cours">Dashboard detail cours</Link></h2>
           </div>
        );
    }
}

export default TestComponent;