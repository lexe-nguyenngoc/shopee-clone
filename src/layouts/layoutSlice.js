import { createSlice } from '@reduxjs/toolkit';
import { httpStatus } from '~/constants';

export const ROOT_STATE_NAME = 'layout';

const initialState = {
  suggestKeyword: {
    status: httpStatus.IDLE,
    data: [],
    error: null,
  },
  cart: {
    status: httpStatus.IDLE,
    data: [],
    error: null,
  },
};

const layoutSlice = createSlice({
  name: ROOT_STATE_NAME,
  initialState,
  reducers: {
    suggestKeywordRequest: (state) => {
      state.suggestKeyword.status = httpStatus.LOADING;
    },
    suggestKeywordSuccess: (state, action) => {
      if (
        JSON.stringify(state.suggestKeyword.data) !==
        JSON.stringify(action.payload)
      ) {
        state.suggestKeyword.data = action.payload;
      }

      state.suggestKeyword.status = httpStatus.SUCCESS;
      state.suggestKeyword.error = null;
    },
    suggestKeywordFailed: (state, action) => {
      state.suggestKeyword.status = httpStatus.FAIL;
      state.suggestKeyword.error = action.payload;
    },

    getCartRequest: (state) => {
      state.cart.status = httpStatus.LOADING;
    },
    getCartSuccess: (state, action) => {
      state.cart.status = httpStatus.SUCCESS;
      state.cart.data = action.payload;
      state.cart.error = null;
    },
    getCartFailed: (state, action) => {
      state.cart.status = httpStatus.FAIL;
      state.cart.error = action.payload;
    },
  },
});

export const suggestKeywordSelector = (state) =>
  state[ROOT_STATE_NAME].suggestKeyword;
export const cartSelector = (state) => state[ROOT_STATE_NAME].cart;
export const {
  suggestKeywordRequest,
  suggestKeywordSuccess,
  suggestKeywordFailed,
  getCartRequest,
  getCartSuccess,
  getCartFailed,
} = layoutSlice.actions;
export default layoutSlice.reducer;
