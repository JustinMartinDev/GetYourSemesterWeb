import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Dashboard from "./components/dashboard/Dashboard";
import SignUp from './components/Auth/SignUp';


class App extends Component {
  render() {
    return (
    <BrowserRouter>
        <div className="App">
            <Navbar/>
            <Switch>
                <Route path='/dashboard' component={Dashboard}/>
                <Route path='/signup' component={SignUp}/>
            </Switch>
        </div>
    </BrowserRouter>

    );
  }
}

export default App;
