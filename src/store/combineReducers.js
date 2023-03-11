import { combineReducers } from "redux";
import authData from "./reducers/authData";

export default combineReducers({
    authData: authData
})