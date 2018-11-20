import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Dashboard from "./Dashboard/Dashboard";
import SignUp from './Auth/SignUp';
import SignIn from './Auth/SignIn';


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
            </Switch>
        </div>
    </BrowserRouter>

    );
  }
}

export default App;
