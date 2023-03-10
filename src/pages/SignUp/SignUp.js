// import { IonContent, IonPage } from "@ionic/react";
import React, { useState } from "react";
import { signUp } from "../../services/api/auth";

const SignUp = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        conformpassword: "",
        password: "",
        verification: ""
    });
    const addData = (e) => {
        const copyData = { ...data };
        copyData[e.target.id] = e.target.value;
        setData(copyData);
    };
    const submitData = async (e) => {
        e.preventDefault();
        console.log(data);
        if (data.conformpassword == data.password) {
            console.log("match password sucess");
            const copyData = {
                username: data.username,
                password: data.password,
                email: data.email,
                two_auth: data.verification == 'true' ? true : false
            };

            try {
                const res = await signUp(copyData);
                console.log(res.data);
            } catch (err) {
                console.log(err.data);
            }
        } else {
            console.log("password not matched");
        }
    };
    return (
        <>
            <div className="bg-[#FFFFFF] min-h-screen flex justify-center items-center">
                <form className="h-[497px] w-[460px] bg-[#F5F5F5] shadow-md rounded px-8 py-10 flex flex-col justify-between">
                    <div class="mb-4 border-b border-black">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="username"
                        >
                            Username
                        </label>
                        <input
                            class="bg-transparent w-full py-2 px-3 text-gray-700"
                            type="text"
                            id="username"
                            placeholder="username"
                            onChange={(e) => {
                                addData(e);
                            }}
                        />
                    </div>
                    <div class="mb-4 border-b border-black">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="username"
                        >
                            Email
                        </label>
                        <input
                            class="bg-transparent w-full py-2 px-3 text-gray-700"
                            type="text"
                            id="email"
                            placeholder="name"
                            onChange={(e) => {
                                addData(e);
                            }}
                        />
                    </div>
                    <div class="mb-6 border-b border-black">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="password"
                        >
                            Password
                        </label>
                        <input
                            class="bg-transparent w-full py-2 px-3 text-gray-700"
                            type="text"
                            id="password"
                            placeholder="******************"
                            onChange={(e) => {
                                addData(e);
                            }}
                        />
                    </div>
                    {/* <p class="text-red-500 text-xs italic">
                Please choose a password.
              </p> */}

                    <div class="mb-4 border-b border-black">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="username"
                        >
                            Conform Password
                        </label>
                        <input
                            class="bg-transparent w-full py-2 px-3 text-gray-700"
                            type="text"
                            id="conformpassword"
                            placeholder="conformpassword"
                            onChange={(e) => {
                                addData(e);
                            }}
                        />
                    </div>
                    <div class="mb-4 border-b border-black">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="username"
                        >
                            Two Factor authentication
                        </label>
                        <input
                            class="bg-transparent w-full py-2 px-3 text-gray-700"
                            type="text"
                            id="verification"
                            placeholder="true or false"
                            onChange={(e) => {
                                addData(e);
                            }}
                        />
                    </div>
                    <div class="flex items-center justify-between">
                        <button
                            onClick={(e) => submitData(e)}
                            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Sign In
                        </button>
                        <a
                            class="inline-block align-baseline font-bold text-sm text-orange-500 hover:text-blue-800"
                            href="#"
                        >
                            Forgot Password?
                        </a>
                    </div>
                </form>
            </div>
            {/* <div>
          <form>
            <div>
              <p>UserName</p>
              <input
                type="text"
                id="username"
                placeholder="username"
                name="name"
                onChange={(e) => {
                  addData(e);
                }}
              />
            </div>
            <div>
              <p>Email</p>
              <input
                type="text"
                id="email"
                placeholder="name"
                name="name"
                onChange={(e) => {
                  addData(e);
                }}
              />
            </div>
            <div>
              <p>Password</p>
              <input
                type="text"
                id="password"
                placeholder="password"
                name="name"
                onChange={(e) => {
                  addData(e);
                }}
              />
            </div>
            <div>
              <p>Conform Password</p>
              <input
                type="text"
                id="conformpassword"
                placeholder="conformpassword"
                name="name"
                onChange={(e) => {
                  addData(e);
                }}
              />
            </div>
          </form>
          <button
            onClick={(e) => {
              submitData(e);
            }}
          >
            submit
          </button>
        </div> */}
        </>
    );
};
export default SignUp;
