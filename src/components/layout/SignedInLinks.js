import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return(
        <ul className="right">
            <li><NavLink to='/'>Dashboard</NavLink></li>
            <li><NavLink to='/'>Logout</NavLink></li>
            <li><NavLink className="btn btn-floating pink lighten-1" to='/'>NN</NavLink></li>
        </ul>
    )
};

export default SignedInLinks;
