import React, { useContext } from 'react';
import PublicRoute from './public';
import PrivateRoute from './private';
import { UserContext } from '../Contexts/index';

export const Routes = () => {
    const userContext = useContext(UserContext);

    return userContext.token ? (<PrivateRoute />) : (<PublicRoute />)
}