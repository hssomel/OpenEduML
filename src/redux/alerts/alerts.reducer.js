import { AlertActionTypes } from "./alerts.action-types";

const {
  SET_LOGIN_MESSAGE,
  CLEAR_LOGIN_MESSAGE,
  SET_LOGIN_HEADER,
  CLEAR_LOGIN_HEADER,
  LAUNCH_ACTIVATED,
  LAUNCH_DEACTIVATED,
} = AlertActionTypes;

const INITIAL_STATE = {
  loginMessage: null,
  loginHeader: null,
  launchActivated: false,
};

const alertsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_LOGIN_MESSAGE:
      return {
        ...state,
        loginMessage: payload,
      };

    case CLEAR_LOGIN_MESSAGE:
      return {
        ...state,
        loginMessage: null,
      };

    case LAUNCH_ACTIVATED:
      return {
        ...state,
        launchActivated: true,
      };

    case LAUNCH_DEACTIVATED:
      return {
        ...state,
        launchActivated: false,
      };
    case SET_LOGIN_HEADER:
      return {
        ...state,
        loginHeader: payload,
      };

    case CLEAR_LOGIN_HEADER:
      return {
        ...state,
        loginHeader: null,
      };
    default:
      return state;
  }
};

export default alertsReducer;
