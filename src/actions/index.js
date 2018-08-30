import * as types from "./actiontypes";
import axios from "axios";

export function changeAppRoot(root) {
  return {
    type: types.ROOT_CHANGED,
    root: root
  };
}

export function fetchUsers() {
  return async function(dispatch) {
    dispatch({ type: types.GET_USERS });
    return axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      dispatch({ type: types.RECEIVE_USERS, users: res.data });
    });
  };
}

export function getUser(user) {
  return async function(dispatch) {
    dispatch({
      type: types.GET_USER,
      user
    });
  };
}
