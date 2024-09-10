import axios from 'axios'; 

import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userTypes";

export const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error.message,
  };
};

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUserRequest());
    try {
      const res = await axios.get('http://localhost:3000/teacher')
      const data = res?.data;
      dispatch(fetchUserSuccess(data));
    } catch (error) {
      dispatch(fetchUserFailure(error.message));
    }
  };
};
