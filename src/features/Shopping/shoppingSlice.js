import { createSlice } from '@reduxjs/toolkit';
import { httpStatus } from '~/constants';

export const ROOT_STATE_NAME = 'shopping';

const initialState = {
  products: {
    status: httpStatus.IDLE,
    data: {},
    error: null,
  },
  product: {
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

    getProductRequest: (state) => {
      state.product.status = httpStatus.LOADING;
    },
    getProductSuccess: (state, action) => {
      state.product.status = httpStatus.SUCCESS;
      state.product.data = action.payload;
      state.product.error = null;
    },
    getProductFailed: (state, action) => {
      state.product.status = httpStatus.FAIL;
      state.product.error = action.payload;
    },
  },
});

export const getProductsSelector = (state) => state[ROOT_STATE_NAME].products;
export const getProductSelector = (state) => state[ROOT_STATE_NAME].product;
export const {
  getProductsRequest,
  getProductsSuccess,
  getProductsFailed,
  getProductRequest,
  getProductSuccess,
  getProductFailed,
} = shoppingSlice.actions;
export default shoppingSlice.reducer;
