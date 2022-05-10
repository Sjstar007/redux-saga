import * as types from './actionType';
import axios from 'axios';

const store_UserData = [];

const getUser = (users) =>({
    type: types.GET_USERS,
    payload: users,
})
const userDeleted = (id) => ({
    type: types.DELETE_USER,
    deleted_id: id
})
const editedUser = (data,id) => ({
    type: types.EDIT_USER,
    payload: data,
    id: id
})
export const  loadUsers = () => {
    return function(dispatch){
        axios.get(`https://jsonplaceholder.typicode.com/users`).then((res)=>{
            console.log(res);
            dispatch(getUser(res.data));
            store_UserData.push(res.data);
        }).catch((error)=>{console.log(error)});
        // axios.get(`${process.env.REACT_APP_API}`).then((res)=>{
        //     console.log("res"+res);
        //     dispatch(getUser(res.data));
        // }).catch((error)=>{console.log(error)});
    }
}

export const  deleteUsers = (id) => {
    return function(dispatch){
        dispatch(userDeleted(id));
    }
}

export const editUser = (userData,id) => {
    return function(dispatch){
        dispatch(editedUser(userData,id));
    }
}

export const loadPostStart = () => ({
    type: "LOAD_POST_START",
})

export const loadPostSuccess = (posts) => ({
    type: "LOAD_POST_SUCCESS",
    payload: posts,
})
export const loadPostFail = (error) => ({
    type: "LOAD_POST_FAIL",
    payload: error,
})