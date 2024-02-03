import axios from "axios";
import {
  LOGIN_POST_FAILURE,
  LOGIN_POST_REQUEST,
  LOGIN_POST_SUCCESS,
  REGISTER_POST_SUCCESS,
} from "../actionTypes";

const url = "";

export const postUserRegistration = (newUser) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_POST_REQUEST });
    let res = await axios.post(`${url}/user/register`, newUser);
    dispatch({ type: REGISTER_POST_SUCCESS, payload: { msg: res.status } });

    return res.status;
  } catch (error) {
    dispatch({ type: LOGIN_POST_FAILURE });
  }
};

export const postUserLogin = (userdata) => async (dispatch) => {
  try {
    dispatch({ typr: LOGIN_POST_REQUEST });
    let res = await axios.post(`${url}/user/login`, userdata);
    if (res.status === 200) {
      localStorage.setItem("token", JSON.stringify(res.data.token));
    }
    dispatch({ type: LOGIN_POST_SUCCESS });
    return res.status;
  } catch (error) {
    dispatch({ type: LOGIN_POST_FAILURE });
    console.log(error);
  }
};

export const postUserLogout = (token) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_POST_REQUEST });
    let res = await axios.post(`${url}/user/logout`, null, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    localStorage.setItem("token", JSON.stringify(null));
    dispatch({
      type: LOGIN_POST_SUCCESS,
      payload: { token: null, msg: res.data.message },
    });
  } catch (error) {
    dispatch({ type: LOGIN_POST_FAILURE });
    console.log(error);
  }
};
