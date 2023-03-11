import React from 'react'
import { useEffect, useState } from "react";
import { Provider } from 'react-redux';
import store from './../store'
import Routes from './../../src/routes/routes.tsx'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from 'react-redux';

const AppWrapper = () => {
    const { authData } = useSelector((state) => state.authData);
    return (
        <Router>
            <Switch>
                <Routes isAuth={authData?.token ? true : false} />
            </Switch>
        </Router>
    )
}

export default AppWrapper