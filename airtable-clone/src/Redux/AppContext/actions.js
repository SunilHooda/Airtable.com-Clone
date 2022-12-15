//describe your actions here

import * as types from "./actionTypes";
import axios from "axios";

const getTasks = () => (dispatch) => {
    dispatch({type: types.GET_TASKS_REQUEST});
    return axios
    .get(`https://6398b39329930e2bb3bf7dcf.mockapi.io/users`)
    .then((res) => {
        dispatch({type: types.GET_TASKS_SUCCESS, payload: res.data});
        console.log("Data: ", res.data);
    })
    .catch((e) => {
        dispatch({type: types.GET_TASKS_FAILURE, payload: e});
    });
};


const getTagsList = () => (dispatch) => {
    dispatch({type: types.GET_TAGS_REQUEST});
    return axios
    .get(`https://6398b39329930e2bb3bf7dcf.mockapi.io/users`)
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
    .put(`https://6398b39329930e2bb3bf7dcf.mockapi.io/users/${id}`, payload)
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
    .post(`https://6398b39329930e2bb3bf7dcf.mockapi.io/users`,{tag})
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
    .put(`https://6398b39329930e2bb3bf7dcf.mockapi.io/users/${id}`, payload)
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
    .put(`https://6398b39329930e2bb3bf7dcf.mockapi.io/users/${id}`, payload)
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
    .post(`https://6398b39329930e2bb3bf7dcf.mockapi.io/users`, payload)
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
    .delete(`https://6398b39329930e2bb3bf7dcf.mockapi.io/users/${id}`)
    .then((res) => {
        dispatch({type: types.DELETE_TASK_SUCCESS, payload: res});
        console.log(res.data);
    })
    .catch((e) => {
        dispatch({type: types.DELETE_TASK_FAILURE, payload: e});
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
    deleteTasks
};