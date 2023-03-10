import { Redirect, Route } from 'react-router-dom';

const PublicRoute = ({ children, isAuth, ...rest }) => {

    return (
        <Route  {...rest} render={props => {
            return isAuth ? <Redirect to='/home' /> : children
        }} />
    );
}

export default PublicRoute