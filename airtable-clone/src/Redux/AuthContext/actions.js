import axios from "axios";
import {
  SIGNIN_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
} from "./actionTypes";

export const Loginfunction = (data) => (dispatch) => {
  dispatch({ type: SIGNIN_REQUEST });

  dispatch({ type: SIGNIN_SUCCESS, payload: data });

  dispatch({ type: SIGNIN_FAILURE });
};
