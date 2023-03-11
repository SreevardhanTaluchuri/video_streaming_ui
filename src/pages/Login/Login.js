import React, { useEffect, useState } from "react";
import { loginUser } from "../../services/api/auth";
import { setItem } from "../../helpers/miscelleneous";
import { useHistory } from "react-router";
import { useDispatch } from 'react-redux'
import * as types from "../../store/actionTypes/auth";
import { login } from "../../store/reducers/authData";
import { useSelector } from "react-redux";
import * as firebase_config from "./../../helpers/firebase-config";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import instance from "../../services/httpinstance/axios";
const Login = () => {
    const { authData } = useSelector((state) => state.authData);
    const history = useHistory();
    const dispatch = useDispatch();
    const [error, setError] = useState();
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const auth = getAuth(firebase_config.app)
    const addData = (e) => {
        const copyData = { ...data };
        copyData[e.target.id] = e.target.value;
        setData(copyData);
    };
    const loginWithGoogle = async (e) => {
        e.preventDefault();
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider)
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            dispatch(login({ data: result.user.accessToken }))
            setTimeout(async () => {
                console.log(authData)
                if (authData) {
                    await setItem("auth", authData);
                    await setItem("time", authData)
                    console.log(authData)
                    history.replace("/dashboard");
                }
            }, 5000)
        } catch (e) {
            console.log(e.code, e.message)
        }
    }
    useEffect(() => {
        console.log(authData)
        if (authData?.token) {
            setItem("auth", authData);
            setItem("time", new Date().getDate() + new Date().getTime());
            if (authData?.authData?.signInMethod == 'email' && authData?.authData?.verification) {
            } else {
                history.push('/signup')
            }
        }
    }, [authData])
    const submitData = async (e) => {
        e.preventDefault();
        try {
            await dispatch(login(data))
            setTimeout(async () => {
                if (authData.authData) {
                    await setItem("auth", authData);
                    await setItem("time", authData.authData)
                    history.replace("/signup");
                }
            }, 5000)
        } catch (error) {
            if (error.response.status == 401) {
                setError(error.response.data);
            }
            if (error.response.status == 402) {
                console.log(error.response.data);
            }
        }
    };
    return (
        <>
            <div className="bg-[#FFFFFF] min-h-screen flex justify-center items-center">
                <form className="h-[497px] w-[460px] bg-[#F5F5F5] shadow-md rounded px-8 py-10 flex flex-col justify-between">
                    <p className="text-[#000000] text-[31px] font-[600] text-center ">
                        LOGIN
                    </p>
                    <div>
                        <div className="mb-8 text-[18px] border-b border-black">
                            <input
                                className="bg-transparent w-full py-3 px-3 text-gray-700  "
                                id="email"
                                type="text"
                                name="name"
                                placeholder="Enter username"
                                onChange={(e) => {
                                    addData(e);
                                }}
                            />
                        </div>

                        <div className="mb-10 text-[18px] border-b border-black">
                            <input
                                className="bg-transparent w-full py-3 px-3 text-gray-700"
                                id="password"
                                type="text"
                                name="password"
                                placeholder="Enter password"
                                onChange={(e) => {
                                    addData(e);
                                }}
                            />
                        </div>
                        <div className="text-right">
                            <a
                                className=" font-bold text-sm text-orange-500 hover:text-gray-800"
                                href="#"
                            >
                                Forgot Password?
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            onClick={(e) => {
                                submitData(e);
                            }}
                            className="bg-green-500 hover:bg-green-600 text-[white] text-[21px] font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                            type="button"
                        >
                            Login
                        </button>
                        <button onClick={(e) => loginWithGoogle(e)}>Login with Google</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
