import { call, put, takeLatest } from 'redux-saga/effects';
import { httpPaths } from '~/constants';
import { http } from '~/services';
import {
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

function* layoutSaga() {
  console.log(`[SAGA] - Layout is running. 💥💥💥`);
  yield takeLatest(suggestKeywordRequest().type, handleSuggestKeyword);
}

export default layoutSaga;
