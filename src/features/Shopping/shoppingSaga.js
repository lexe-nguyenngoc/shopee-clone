import { call, put, takeLatest } from 'redux-saga/effects';
import { httpPaths } from '~/constants';
import { http } from '~/services';
import {
  getProductsFailed,
  getProductsRequest,
  getProductsSuccess,
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

function* shoppingSaga() {
  console.log('[SAGA] - Shopping saga is running. 💥💥💥');
  yield takeLatest(getProductsRequest().type, handleGetProducts);
}
export default shoppingSaga;
