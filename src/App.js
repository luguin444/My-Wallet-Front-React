import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import GlobalStyle from './assets/styles/global.js';
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'
import Home from './pages/Home'
import NewData from './pages/NewData'

import {UserProvider} from './Contexts/UserContext'


export default function App () {
 
    return (
        <UserProvider>
            <Router >
                <GlobalStyle />
                <Switch>
                    <Route  path = '/sign-in' component = {SignInPage}/>
                    <Route  path = '/sign-up' component = {SignUpPage}/>
                    <Route  path = '/newData/:type' component = {NewData}/>
                    <Route  path = '/' component = {Home}/>
                </Switch>
            </Router>
        </UserProvider>
    );
}