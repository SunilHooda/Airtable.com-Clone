
import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS,SIGNIN_FAILURE, SIGNIN_REQUEST,
  SIGNIN_SUCCESS, } from "./actionTypes";
import axios from "axios"
//describe your actions here
export const SignUpFunc = (payload) => (dispatch) => {
  console.log(payload);
    dispatch({ type: SIGNUP_REQUEST });
    axios
      .post("https://6398b39329930e2bb3bf7dcf.mockapi.io/users", payload)
      .then((response) => {
        dispatch({ type: SIGNUP_SUCCESS, payload: response.data });
        console.log(response.data);
      })
      .catch((e) => {
        dispatch({ type: SIGNUP_FAILURE });
        console.log(e);
      });
  };
  export const Loginfunction = (data) => (dispatch) => {
  dispatch({ type: SIGNIN_REQUEST });

  dispatch({ type: SIGNIN_SUCCESS, payload: data });

  dispatch({ type: SIGNIN_FAILURE });
};

