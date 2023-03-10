import axios from "axios";
// Created Axios instance to use it in whole application
const instance = (url, method, data, token) => {
    console.log(url, method, data);
    return axios.request({
        baseURL: "http://localhost:3001/api",
        url: url,
        method: method,
        data: data,
        headers: {
            "Content-Type": "application/json",
            'Authorization': token ? token : ""
        },
    });
}

export default instance;
