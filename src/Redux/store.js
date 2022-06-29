import { configureStore } from "@reduxjs/toolkit";
import  {AuthenticationSlice}  from "./AuthenticationSlice";

export const Store = configureStore({ reducer: AuthenticationSlice.reducer });
