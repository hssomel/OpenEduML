import { AlertActionTypes } from "./alerts.action-types";

const { SET_LOGIN_ERROR, CLEAR_LOGIN_ERROR } = AlertActionTypes;

const INITIAL_STATE = {
  loginError: null,
};

const alertsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_LOGIN_ERROR:
      return {
        ...state,
        loginError: payload,
      };

    case CLEAR_LOGIN_ERROR:
      return {
        ...state,
        loginError: null,
      };
    default:
      return state;
  }
};

export default alertsReducer;
