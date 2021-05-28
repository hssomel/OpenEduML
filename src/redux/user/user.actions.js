import { UserActionTypes } from "./user.action-types";

const { SET_CURRENT_USER, SET_CURRENT_PROFILE } = UserActionTypes;

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
