import { UserActionTypes } from "./user.action-types";

const { SET_CURRENT_USER, SET_CURRENT_PROFILE, CLEAR_USER, SET_USER_USAGE } = UserActionTypes;

export const setCurrentUser = (user) => async (dispatch) => {
  try {
    dispatch({
      type: SET_CURRENT_USER, // the reducer
      payload: user,
    });
  } catch (err) {
    console.log(err);
  }
};

export const setCurrentProfile = (profile) => async (dispatch) => {
  try {
    dispatch({
      type: SET_CURRENT_PROFILE, // the reducer
      payload: profile,
    });
  } catch (err) {
    console.log(err);
  }
};

export const setUserUsage = (usage) => async (dispatch) => {
  try {
    dispatch({
      type: SET_USER_USAGE, // the reducer
      payload: usage,
    });
  } catch (err) {
    console.log(err);
  }
};

export const clearProfile = () => async (dispatch) => {
  try {
    dispatch({
      type: CLEAR_USER, // the reducer
    });
  } catch (err) {
    console.log(err);
  }
};
