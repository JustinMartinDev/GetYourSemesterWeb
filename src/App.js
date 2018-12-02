import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Utils/Layout/Navbar';

import RouterCreate from "./Create/RouterCreate";
import RouterDashboard from "./Dashboard/RouterDashboard";
import RouterDashboardDetail from "./DashboardDetail/RouterDashboardDetail";

import SignUp from './Auth/SignUp';
import SignIn from './Auth/SignIn';


class App extends Component {
  render() {
    return (
    <BrowserRouter>
        <div className="App">
            <Navbar/>
            <Switch>
                <Route path='/dashboard-detail/:elem(cours|questionnaire)' component={RouterDashboardDetail}/>
                <Route path='/dashboard/:elem(cours|questionnaire)' component={RouterDashboard}/>
                <Route path='/signup' component={SignUp}/>
                <Route path='/signin' component={SignIn}/>
                <Route path='/create/:elem(cours|questionnaire)' component={RouterCreate}/>
            </Switch>
        </div>
    </BrowserRouter>

    );
  }
}

export default App;
