import { createAction } from "@reduxjs/toolkit";

export const authCallBegan = createAction("authCallBegan");
export const authCallSuccess = createAction("authCallSuccess");
export const authCallError = createAction("authCallError");