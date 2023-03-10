import axios from "axios";
import { getItem, removeItem, setItem } from "../helpers/miscelleneous";


export const getAccessToken = async () => {
    return await getItem('auth')?.token;
};

export const getRefreshToken = () => {
    return getItem('auth')?.refresh_token;
};


export const refreshUser = async () => {
    let startTime = new Date(getItem('time'));
    let auth = getItem('auth');

    if (!auth) {
        return false
    }

    let endTime = new Date();
    let timeDiff = Math.floor((endTime - startTime) / 1000);

    if (timeDiff > auth.expires) {

        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Authorization': `Bearer ${auth?.refresh_token}`
        };

        const response = await axios.post(`${process.env.REACT_APP_API}/user/refresh`, {}, { headers }).then(r => {
            auth.access_token = r.data.access_token;
            setItem('time', new Date());
            setItem('auth', auth);
            return true;
        }).catch(e => {
            return false;
        })

        return response;
    }
    return true;

};


export const logOut = () => {
    window.location.reload();
    console.log("Logged out");
    removeItem("auth");
};


export const getAuthToken = async () => {
    let auth = getItem('auth');
    if (!auth) {
        return false
    }
    const isUserRefreshed = await refreshUser();
    if (!isUserRefreshed) {
        logOut();
        return;
    }

    const token = `Bearer ${await getAccessToken()}`;
    return token;
};
