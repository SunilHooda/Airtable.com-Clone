
import * as types from "./actionTypes";

const initialState = {
  users: [],
  isLoading: false,
  isError: false,
};

const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_USERS_REQUEST:
      return { ...oldState, isLoading: true };
    case types.GET_USERS_SUCCESS:
      return { ...oldState, isLoading: false, users: payload };
    case types.GET_USERS_ERROR:
      return { ...oldState, isLoading: false, isError: true };
    default:
      return oldState;
  }
};

export {reducer};
