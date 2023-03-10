import React from "react";
import { Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Login from "./../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
type Props = {
 isAuth: Boolean;
 user: Boolean;
};

const Routes = ({ isAuth, user }: Props) => {
 //  console.log();
 return (
  <>
   <PublicRoute isAuth={isAuth} exact path="/">
    <Login />
   </PublicRoute>
   <PrivateRoute isAuth={true} exact path="/signup">
    <SignUp />
   </PrivateRoute>
   {/* <PrivateRoute isAuth={isAuth} exact path="/home">
    <Home />
   </PrivateRoute>
   <PrivateRoute exact isAuth={isAuth} path="/devices">
    <Devices />
   </PrivateRoute>
   <PrivateRoute isAuth={isAuth} path="/users">
    {user ? <Users /> : <Redirect to="/home" />}
   </PrivateRoute> */}
   {/* <PublicRoute isAuth={isAuth} exact path="/">
    <Redirect to="/login" />
   </PublicRoute> */}
  </>
 );
};

export default Routes;
