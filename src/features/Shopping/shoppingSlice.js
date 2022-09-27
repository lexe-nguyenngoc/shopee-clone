import { createSlice } from '@reduxjs/toolkit';
import { httpStatus } from '~/constants';

export const ROOT_STATE_NAME = 'shopping';

const initialState = {
  products: {
    status: httpStatus.IDLE,
    data: {},
    error: null,
  },
};

const shoppingSlice = createSlice({
  name: ROOT_STATE_NAME,
  initialState,
  reducers: {
    getProductsRequest: (state) => {
      state.products.status = httpStatus.LOADING;
    },
    getProductsSuccess: (state, action) => {
      state.products.status = httpStatus.SUCCESS;
      state.products.data = action.payload;
      state.products.error = null;
    },
    getProductsFailed: (state, action) => {
      state.products.status = httpStatus.FAIL;
      state.products.error = action.payload;
    },
  },
});

export const getProductsSelector = (state) => state[ROOT_STATE_NAME].products;
export const { getProductsRequest, getProductsSuccess, getProductsFailed } =
  shoppingSlice.actions;
export default shoppingSlice.reducer;
