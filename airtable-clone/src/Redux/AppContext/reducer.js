// const initialState = {
//   isLoading: false,
//   isError: false,
//   data: [],
// };

// export const reducer = () => {};


import * as types from "./actionTypes";

const initialState = {
    users: [],
    isLoading: false,
    isError: false
};

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.GET_TASKS_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case types.GET_TASKS_SUCCESS:
            return {
                ...state,
                users: payload,
                isLoading: false,
                isError: false
            };
        case types.GET_TASKS_FAILURE:
            return {
                ...state,
                users: [],
                isLoading: false,
                isError: true
            };

        default:
            return state;
    };
};

export { reducer };