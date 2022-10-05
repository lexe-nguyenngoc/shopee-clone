import { call, put, takeLatest } from 'redux-saga/effects';
import { httpPaths } from '~/constants';
import { http } from '~/services';
import {
  getProductFailed,
  getProductRequest,
  getProductsFailed,
  getProductsRequest,
  getProductsSuccess,
  getProductSuccess,
} from './shoppingSlice';

function* handleGetProducts(action) {
  try {
    const data = yield call(http.GET, httpPaths.products, action.payload);

    yield put(getProductsSuccess(data));
  } catch (error) {
    const { message = 'Something went wrong!' } = error;
    yield put(getProductsFailed(message));
  }
}

function* handleGetProduct(action) {
  try {
    const { id } = action.payload;

    const { data } = yield call(http.GET, `${httpPaths.products}/${id}`);

    yield put(getProductSuccess(data));
  } catch (error) {
    const { message = 'Something went wrong!' } = error;
    yield put(getProductFailed(message));
  }
}

function* shoppingSaga() {
  console.log('[SAGA] - Shopping saga is running. 💥💥💥');
  yield takeLatest(getProductsRequest().type, handleGetProducts);
  yield takeLatest(getProductRequest().type, handleGetProduct);
}
export default shoppingSaga;
