import { call, put, takeLatest } from 'redux-saga/effects';
import { defaultMsg, httpPaths } from '~/constants';
import { http } from '~/services';
import {
  getCartFailed,
  getCartRequest,
  getCartSuccess,
  suggestKeywordFailed,
  suggestKeywordRequest,
  suggestKeywordSuccess,
} from './layoutSlice';

function* handleSuggestKeyword(action) {
  try {
    const { data } = yield call(http.GET, httpPaths.suggestKeyword, {
      q: action.payload,
      _limit: 10,
    });
    yield put(suggestKeywordSuccess(data));
  } catch (error) {
    const { message = 'Something went wrong!' } = error;
    yield put(suggestKeywordFailed(message));
  }
}

function* handleGetCart(action) {
  try {
    const { data } = yield call(http.GET, httpPaths.cart);
    yield put(getCartSuccess(data));
  } catch (error) {
    const { message = defaultMsg } = error;
    yield put(getCartFailed(message));
  }
}

function* layoutSaga() {
  console.log(`[SAGA] - Layout is running. 💥💥💥`);
  yield takeLatest(suggestKeywordRequest().type, handleSuggestKeyword);
  yield takeLatest(getCartRequest().type, handleGetCart);
}

export default layoutSaga;
