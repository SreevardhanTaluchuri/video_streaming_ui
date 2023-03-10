import { loginUser } from "../../services/api/auth";
import * as types from './../actionTypes/auth'

const api = ({ dispatch }) => next => async action => {
    if (action.type != types.authCallBegan.type) {
        // console.log(action)
        return next(action)
    };
    next(action);
    if (action.type == types.authCallBegan.type)
        postLogin(action, dispatch)
};

const postLogin = async (action, dispatch) => {
    const { url, method, data, onSuccess, onError } = action.payload;
    try {
        const res = await loginUser(url, method, data)
        if (onSuccess)
            return dispatch({ type: onSuccess, payload: res.data });
        // dispatch({ type: "API_CALL_SUCCESS", payload: res.data });
        dispatch(types.authCallSuccess(res.data));
    }
    catch (err) {
        if (onError)
            return dispatch({ type: onError, payload: err.message });

        dispatch(types.authCallError(err.message));
    }
}

export default api;