import { createSlice } from '@reduxjs/toolkit';
import { httpStatus } from '~/constants';
import { cookies } from '~/utils';

export const ROOT_STATE_NAME = 'auth';

const initialState = {
  auth: {
    status: httpStatus.IDLE,
    data: JSON.parse(cookies.getItem('auth')) || {},
    error: null,
  },
};

const authSlice = createSlice({
  name: ROOT_STATE_NAME,
  initialState,
  reducers: {
    signInRequest: (state) => {
      state.auth.status = httpStatus.LOADING;
    },
    signInSuccess: (state, action) => {
      state.auth.status = httpStatus.SUCCESS;
      state.auth.data = action.payload;
      state.auth.error = null;
    },
    signInFailed: (state, action) => {
      state.auth.status = httpStatus.FAIL;
      state.auth.error = action.payload;
    },
    resetAuth: (state) => {
      state.auth = {
        status: httpStatus.IDLE,
        data: {},
        error: null,
      };
    },
  },
});

export const authSelector = (state) => state[ROOT_STATE_NAME].auth;
export const { signInRequest, signInSuccess, signInFailed, resetAuth } =
  authSlice.actions;
export default authSlice.reducer;
