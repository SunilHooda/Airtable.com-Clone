import * as types from "./actionTypes";

const initialState = {
  tasks: [],
  tags: [],
  events: [],
  checkPoint: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_TASKS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_TASKS_SUCCESS:
      return {
        ...state,
        tasks: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_TASKS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.GET_TAGS_REQUEST:
      return { ...state };

    case types.GET_TAGS_SUCCESS:
      return {
        ...state,
        tags: payload,
      };

    case types.GET_TAGS_FAILURE:
      return { ...state };

    case types.GET_EVENTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_EVENTS_SUCCESS:
      return {
        ...state,
        events: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_EVENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.GET_CHECKPOINT_REQUEST:
      return { ...state };

    case types.GET_CHECKPOINT_SUCCESS:
      return {
        ...state,
        checkPoint: payload,
      };

    case types.GET_CHECKPOINT_FAILURE:
      return { ...state };
    default:
      return state;
  }
};

export { reducer };
