import { AlertActionTypes } from "./alerts.action-types";

const { SET_LOGIN_ERROR, CLEAR_LOGIN_ERROR } = AlertActionTypes;

export const setLoginError = (message) => async (dispatch) => {
  try {
    dispatch({
      type: SET_LOGIN_ERROR, // the reducer
      payload: message,
    });
  } catch (err) {
    console.log(err);
  }
};

export const clearLoginError = () => async (dispatch) => {
  try {
    dispatch({
      type: CLEAR_LOGIN_ERROR, // the reducer
      payload: "",
    });
  } catch (err) {
    console.log(err);
  }
};
