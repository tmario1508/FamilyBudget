import React, { Component, Fragment } from "react";
import {Container} from 'semantic-ui-react';

import Home from './layouts/Home';
import Users from './layouts/Users';
import Profile from './layouts/Profiles';
import Expenses from './layouts/Expenses';
import Navbar from './layouts/Navbar';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css'


export default class App extends Component{

    render(){
        return(
            <Fragment>
                <BrowserRouter>
                    <Navbar></Navbar>
                    <Container style={{marginTop : '7em'}}>
                        <Switch>
                            <Route exact path="/">
                                <Home></Home>
                            </Route>
                            <Route path="/users">
                                <Users></Users>
                            </Route>
                            <Route path="/profiles">
                                <Profile></Profile>
                            </Route>
                            <Route path="/expenses">
                                <Expenses></Expenses>
                            </Route>
                        </Switch>
                    </Container>

                </BrowserRouter>
            </Fragment>
        );
    }
}