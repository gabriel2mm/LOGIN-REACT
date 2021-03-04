import React from 'react';
import { HomePage } from '../Pages/index';
import { Redirect, Switch, Route } from 'react-router-dom';

function PrivateRoutes() {
    return (
        <Switch>
            <Route path="/app/home" component={HomePage} />
            <Route exact path="/**" render={() => <Redirect to="/app/home" />} />
        </Switch>
    )
}

export default PrivateRoutes;