import { createSlice } from "@reduxjs/toolkit";
import { authCallBegan } from "../actionTypes/auth";

const slice = createSlice({
    name: 'authData',
    initialState: {
        authData: []
    },
    reducers: {
        authCallSuccess: (authData, action) => {
            authData.authData = action.payload;
        }
    }
})



export const { authCallSuccess } = slice.actions;
export default slice.reducer;

export const login = (data) => authCallBegan({
    url: "/auth/login",
    method: "POST",
    data: data,
    onSuccess: authCallSuccess.type,
})