//describe your actions here
import * as types from "./actionTypes";
import axios from "axios";


const getTasks = () => (dispatch) => {
    dispatch({type: types.GET_TASKS_REQUEST});
    return axios
    .get(`https://639a7c9f3a5fbccb5267f6a0.mockapi.io/tasks`)
    .then((res) => {
        dispatch({type: types.GET_TASKS_SUCCESS, payload: res.data});
    })
    .catch((e) => {
        dispatch({type: types.GET_TASKS_FAILURE, payload: e});
    });
};


const getTagsList = () => (dispatch) => {
    dispatch({type: types.GET_TAGS_REQUEST});
    return axios
    .get(`https://639a7c9f3a5fbccb5267f6a0.mockapi.io/tagList`)
    .then((r) => {
        dispatch({type: types.GET_TAGS_SUCCESS, payload: r.data});
    })
    .catch((e) => {
        dispatch({type: types.GET_TAGS_FAILURE, payload: e});
    });
};


const updateSubtasksList = (id, payload) => (dispatch) => {
    dispatch({type: types.UPDATE_SUBTASKS_REQUEST});
    return axios
    .put(`https://639a7c9f3a5fbccb5267f6a0.mockapi.io/tasks/${id}`, payload)
    .then((r) => {
        dispatch({type: types.UPDATE_SUBTASKS_SUCCESS, payload: r});
    })
    .catch((e) => {
        dispatch({type: types.UPDATE_SUBTASKS_FAILURE, payload: e});
    });
};


const updateTasks = (id, payload) => (dispatch) => {
    dispatch({type:types.UPDATE_TASK_REQUEST});
    return axios
    .put(`https://639a7c9f3a5fbccb5267f6a0.mockapi.io/tasks/${id}`, payload)
    .then((r) => {
        dispatch({type: types.UPDATE_TASK_SUCCESS, payload: r.data});
    })
    .catch((e) => {
        dispatch({type: types.UPDATE_TASK_FAILURE, payload: e});
    });
};


const addTags = (tag) => (dispatch) => {
    dispatch({type: types.ADD_TAGS_REQUEST});
    return axios
    .post(`https://639a7c9f3a5fbccb5267f6a0.mockapi.io/tagList`,{tag})
    .then((r) => {
        dispatch({type: types.ADD_TAGS_SUCCESS, payload: r.data});
    })
    .catch((e) => {
        dispatch({type: types.ADD_TAGS_FAILURE, payload: e});
    });
};


const addSubtasks = (id, payload) => (dispatch) => {
    dispatch({type: types.ADD_SUBTASKS_REQUEST});
    return axios
    .put(`https://639a7c9f3a5fbccb5267f6a0.mockapi.io/tasks/${id}`, payload)
    .then((r) => {
        dispatch({type: types.ADD_SUBTASKS_SUCCESS, payload: r});
    })
    .catch((e) => {
        dispatch({type: types.ADD_SUBTASKS_FAILURE, payload: e});
    });
};



const deleteSubtasks = (id, payload) => (dispatch) => {
    dispatch({type: types.DELETE_SUBTASKS_REQUEST});
    return axios
    .put(`https://639a7c9f3a5fbccb5267f6a0.mockapi.io/tasks/${id}`, payload)
    .then((r) => {
        dispatch({type: types.DELETE_SUBTASKS_SUCCESS, payload: r.data});
    })
    .catch((e) => {
        dispatch({type: types.DELETE_SUBTASKS_FAILURE, payload: e});
    });
};



const createTasks = (payload) => (dispatch) => {
    dispatch({type: types.CREATE_TASK_REQUEST});
    return axios
    .post(`https://639a7c9f3a5fbccb5267f6a0.mockapi.io/tasks`, payload)
    .then((res) => {
        dispatch({type: types.CREATE_TASK_SUCCESS, payload: res.data});
    })
    .catch((e) => {
        dispatch({type: types.CREATE_TASK_FAILURE, payload: e});
    });
};



const deleteTasks = (id) => (dispatch) => {
    dispatch({type: types.DELETE_TASK_REQUEST});
    return axios
    .delete(`https://639a7c9f3a5fbccb5267f6a0.mockapi.io/tasks/${id}`)
    .then((res) => {
        dispatch({type: types.DELETE_TASK_SUCCESS, payload: res});
    })
    .catch((e) => {
        dispatch({type: types.DELETE_TASK_FAILURE, payload: e});
    });
};



const getCheckPoint = () => (dispatch) => {
    dispatch({type: types.GET_CHECKPOINT_REQUEST});
    return axios
    .get(`https://639a7c9f3a5fbccb5267f6a0.mockapi.io/checkpoint`)
    .then((res) => {
        dispatch({type: types.GET_CHECKPOINT_SUCCESS, payload: res.data});
    })
    .catch((e) => {
        dispatch({type: types.GET_CHECKPOINT_FAILURE, payload: e});
    });
};



const addCheckPoint = (payload) => (dispatch) => {
    dispatch({type: types.GET_CHECKPOINT_REQUEST});
    return axios
    .post(`https://639a7c9f3a5fbccb5267f6a0.mockapi.io/checkpoint`, payload)
    .then((res) => {
        dispatch({type: types.GET_CHECKPOINT_SUCCESS, payload: res.data});
        console.log("Add checkpoint: ", res.data);
    })
    .catch((e) => {
        dispatch({type: types.GET_CHECKPOINT_FAILURE, payload: e});
    });
};



const updateCheckPoints = (id, payload) => (dispatch) => {
    dispatch({type:types.UPDATE_CHECKPOINT_REQUEST});
    return axios
    .put(`https://639a7c9f3a5fbccb5267f6a0.mockapi.io/checkpoint/${id}`, payload)
    .then((r) => {
        dispatch({type: types.UPDATE_CHECKPOINT_SUCCESS, payload: r.data});
    })
    .catch((e) => {
        dispatch({type: types.UPDATE_CHECKPOINT_FAILURE, payload: e});
    });
};




export {
    getTasks, 
    getTagsList, 
    updateSubtasksList, 
    updateTasks, 
    addTags, 
    addSubtasks, 
    deleteSubtasks,
    createTasks,
    deleteTasks,
    getCheckPoint,
    addCheckPoint,
    updateCheckPoints
};