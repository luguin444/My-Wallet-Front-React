import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import GlobalStyle from './assets/styles/global.js';
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'


export default function App () {
 
    return (
        <Router >
             <GlobalStyle />
             <Switch>
                 <Route  path = '/sign-in' component = {SignInPage}/>
                 <Route  path = '/sign-up' component = {SignUpPage}/>
             </Switch>
        </Router>
    );
}