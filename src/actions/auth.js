//Quán lý việc đăng nhập từ user hoặc admin
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_REQUEST,REGISTER_SUCCESS, REGISTER_FAILURE } from "../constants/auth";
import authAPI from "../Services/authAPI";

import React from "react";
import { setCookie } from "../Services/handleCookie";

export default function login(values) {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const { data } = await authAPI.login(values);
      localStorage.setItem("token", JSON.stringify(data.token));
      // setCookie("token", data.token, 0.00138888889); 
      dispatch({ type: LOGIN_SUCCESS, payload: { data } });
    } catch (error) {
      console.log(error);
      dispatch({
        type: LOGIN_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}


export function register(values) {
  return async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    try {
      const { data } = await authAPI.register(values);
      localStorage.setItem("token", JSON.stringify(data.token));
      // setCookie("token", data.token, 0.00138888889); 
      dispatch({ type: REGISTER_SUCCESS, payload: { data } });
    } catch (error) {
      console.log(error);
      dispatch({
        type: REGISTER_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
