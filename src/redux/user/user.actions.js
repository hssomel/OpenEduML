import { UserActionTypes } from "./user.action-types";

const { SET_CURRENT_USER } = UserActionTypes;

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
