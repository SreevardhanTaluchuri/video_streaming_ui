import React from 'react'
import { useEffect, useState } from "react";
import { Provider } from 'react-redux';
import store from './../store'
import Routes from './../../src/routes/routes.tsx'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const AppWrapper = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Routes isAuth={false}
                        user={true} />
                </Switch>
            </Router>
        </Provider>
    )
}

export default AppWrapper