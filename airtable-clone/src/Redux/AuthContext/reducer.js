import {
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNIN_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNOUT,
} from "./actionTypes";
import { getLocalData, saveData } from "../../Utils/localStorageData";

const SignUpState = {
  createAccountLoading: false,
  successCreate: false,
  createError: false,
  userData: getLocalData("loggedUser") || {},
  isAuth: getLocalData("isAuth") || false,
  isLoading: false,
  isError: false,
};

export const reducer = (state = SignUpState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        createAccountLoading: true,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        createAccountLoading: false,
        successCreate: true,
        createError: false,
        isAuth: false,
        userData: payload,
      };

    case SIGNUP_FAILURE:
      return {
        ...state,
        createAccountLoading: false,
        successCreate: false,
        creatError: true,
      };

    case SIGNIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case SIGNIN_SUCCESS:
      const loggedIn = !state.isAuth;
      saveData("isAuth", loggedIn);
      return {
        ...state,
        isLoading: false,
        isAuth: loggedIn,
        userData: payload,
        isError: false,
      };

    case SIGNIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case SIGNOUT:
      return {
        ...state,
        userData: {},
        isAuth: false,
        isLoading: false,
        isError: false,
        successCreate: false,
        createAccountLoading: false,
        createError: false,
      };
    default:
      return state;
  }
};
