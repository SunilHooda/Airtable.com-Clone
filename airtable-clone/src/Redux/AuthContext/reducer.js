import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actionTypes";

const SignUpState = {
    createAccountLoading: false,
    successCreate: false,
    createError: false,
    userData: [],
};

export const reducer = (state=SignUpState,type,payload) => {
    switch(type){
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
        userData: payload,
      };

    case SIGNUP_FAILURE:
      return {
        ...state,
        createAccountLoading: false,
        successCreate: false,
        creatError: true,
      };
        default : return state;
    }
};
