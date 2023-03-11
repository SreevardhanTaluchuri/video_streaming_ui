import Home from '../pages/Dashboard/Home/Home'
import React from 'react'


const Routes = (props) => {
    return [
        {
            name: 'Home',
            link: '/dashboard/home',
            // icon: <BiHome size={24} />,
            component: <Home {...props} />,
            enable: true,
        },
    ]
}

export default Routes