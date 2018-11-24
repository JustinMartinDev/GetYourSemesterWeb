import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Utils/Layout/Navbar';
import Dashboard from "./Dashboard/Dashboard";
import SignUp from './Auth/SignUp';
import SignIn from './Auth/SignIn';
import CreateCours from './Cours/CreateCours';
import Avatar from './Cours/Component/Avatar';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
        <div className="App">
            <Navbar/>
            <Switch>
                <Route path='/dashboard' component={Dashboard}/>
                <Route path='/signup' component={SignUp}/>
                <Route path='/signin' component={SignIn}/>
                <Route path='/create' component={CreateCours}/>
            </Switch>
        </div>
    </BrowserRouter>

    );
  }
}

export default App;
