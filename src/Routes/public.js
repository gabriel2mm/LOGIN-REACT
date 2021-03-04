import React from 'react';
import {LoginPage } from '../Pages/index';
import { Redirect, Switch, Route } from 'react-router-dom';

function PublicRoute(){
    return (
        <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/**"  render={() => <Redirect to="/login" />} />
        </Switch>
    )
}

export default PublicRoute;