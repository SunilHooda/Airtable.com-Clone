import axios from "axios";
import * as types from "./actionTypes";

const getuserRequest = () => {
  return {
    type: types.GET_USERS_REQUEST,
  };
};
const getuserSuccess = (payload) => {
  return {
    type: types.GET_USERS_SUCCESS,
    payload
  };
};
const getuserError = () => {
  return {
    type: types.GET_USERS_ERROR,
  };
};

const getUsers = (params) => (dispatch) => {
  dispatch(getuserRequest());
  return axios
    .get("https://6398b39329930e2bb3bf7dcf.mockapi.io/users",params)
    .then((r) => {
      dispatch(getuserSuccess(r.data));
    })
    .catch((e) => {
      dispatch(getuserError());
    });
};

//https://6398b39329930e2bb3bf7dcf.mockapi.io/users


export { getuserRequest, getuserSuccess, getuserError, getUsers };
