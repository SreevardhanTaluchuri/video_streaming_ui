import React, { useEffect, useState } from 'react';
import { Route, useLocation } from "react-router";
import Routes from './Routes';


const DashboardLayout = ({ isAdmin }) => {
    const pages = Routes(isAdmin)

    const location = useLocation();
    console.log(pages[0])
    return (
        <div className="DashboardLayout">
            {pages.map(({ link, component }, i) => (
                <Route exact path={link} key={i} render={(props) => component}></Route>
            ))}
        </div>
    )
};

DashboardLayout.propTypes = {};

DashboardLayout.defaultProps = {};

export default DashboardLayout;
