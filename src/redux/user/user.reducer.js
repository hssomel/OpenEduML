import { UserActionTypes } from "./user.action-types";

const { SET_CURRENT_USER, SET_CURRENT_PROFILE, CLEAR_USER, SET_USER_USAGE } = UserActionTypes;

const INITIAL_STATE = {
  currentUser: null,
  currentProfile: null,
  userUsage: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    case SET_CURRENT_PROFILE:
      return {
        ...state,
        currentProfile: payload,
      };
    case SET_USER_USAGE:
      return {
        ...state,
        userUsage: payload,
      };
    case CLEAR_USER:
      return {
        ...state,
        currentUser: null,
        currentProfile: null,
      };
    default:
      return state;
  }
};

export default userReducer;
