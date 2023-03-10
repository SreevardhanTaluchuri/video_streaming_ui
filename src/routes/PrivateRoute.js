import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ children, isAuth, ...rest }) => {

 return (
  <Route  {...rest} render={props => {
   return isAuth ? children : <Redirect to='/' />
  }} />
 );
}

export default PrivateRoute