import { AlertActionTypes } from "./alerts.action-types";

const { SET_LOGIN_MESSAGE, CLEAR_LOGIN_MESSAGE, SET_LOGIN_HEADER, CLEAR_LOGIN_HEADER } =
  AlertActionTypes;

export const setLoginMessage = (message) => async (dispatch) => {
  try {
    dispatch({
      type: SET_LOGIN_MESSAGE, // the reducer
      payload: message,
    });
  } catch (err) {
    console.log(err);
  }
};

export const clearLoginMessage = () => async (dispatch) => {
  try {
    dispatch({
      type: CLEAR_LOGIN_MESSAGE, // the reducer
      payload: "",
    });
  } catch (err) {
    console.log(err);
  }
};

export const setLoginHeader = (message) => async (dispatch) => {
  try {
    dispatch({
      type: SET_LOGIN_HEADER, // the reducer
      payload: message,
    });
  } catch (err) {
    console.log(err);
  }
};

export const clearLoginHeader = () => async (dispatch) => {
  try {
    dispatch({
      type: CLEAR_LOGIN_HEADER, // the reducer
      payload: "",
    });
  } catch (err) {
    console.log(err);
  }
};
