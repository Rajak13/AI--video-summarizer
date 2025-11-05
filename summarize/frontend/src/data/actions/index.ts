import {
  registerUserAction,
  logoutUserAction,
  getAuthTokenAction,
} from "./auth";

export const actions = {
  auth: {
    registerUserAction,
    logoutUserAction,
    getAuthTokenAction,
  },
};