import {
  LOGIN_POST_FAILURE,
  LOGIN_POST_REQUEST,
  LOGIN_POST_SUCCESS,
  REGISTER_POST_SUCCESS,
} from "../actionTypes";

const initialState = {
  isLoading: false,
  msg: "",
  token: JSON.parse(localStorage.getItem("token")) || null,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_POST_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_POST_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case LOGIN_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.msg,
        token: action.payload.token,
      };
    case REGISTER_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload,
      };

    default:
      return state;
  }
};
