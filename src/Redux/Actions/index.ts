import { createAction } from "redux-starter-kit";

export const loginStart = createAction("loginStart");

export const loginSuccess = createAction(
  "loginSuccess",
  (username, jwt, userType, expireOn) => {
    return {
      payload: {
        username,
        jwt,
        userType,
        expireOn
      }
    };
  }
);

export const loginError = createAction("loginError", errInfo => {
  return {
    payload: {
      errInfo
    }
  };
});
