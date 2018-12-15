import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Navbar from './Utils/Layout/Navbar';

import RouterCreate from "./Create/RouterCreate";
import RouterDashboard from "./Dashboard/RouterDashboard";
import RouterDashboardDetail from "./DashboardDetail/RouterDashboardDetail";


import TestComponent from "./TestComponent";
import SignUp from './Auth/SignUp';
import SignIn from './Auth/SignIn';


class App extends Component {
  render() {
    return (
    <BrowserRouter>
        <div className="App">
            <Navbar/>
            <Switch>
                <Route path='/test' component={TestComponent}/>
                <Route path='/dashboard-detail/:elem(cours|questionnaire)' component={RouterDashboardDetail}/>
                <Route path='/dashboard/:elem(cours|questionnaire)' component={RouterDashboard}/>
                <Route path='/signup' component={SignUp}/>
                <Route path='/signin' component={SignIn}/>
                <Route path='/create/:elem(cours|questionnaire)' component={RouterCreate}/>
            </Switch>
            <h2><Link to="/test">Test</Link></h2>
        </div>
    </BrowserRouter>

    );
  }
}

export default App;
