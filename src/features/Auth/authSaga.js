import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { httpPaths } from '~/constants';
import { http } from '~/services';
import { cookies } from '~/utils';
import { signInFailed, signInRequest, signInSuccess } from './authSlice';

function* handleSignIn(action) {
  try {
    const { data } = yield call(http.POST, httpPaths.signIn, action.payload);
    yield delay(500);

    cookies.addCookie('auth', JSON.stringify(data));
    yield put(signInSuccess(data));
  } catch (error) {
    const message =
      'Tên tài khoản của bạn hoặc Mật khẩu không đúng, vui lòng thử lại.';

    yield put(signInFailed(message));
  }
}

function* authSaga() {
  console.log('[SAGA] - Auth is running. 💥💥💥');
  yield takeLatest(signInRequest().type, handleSignIn);
}

export default authSaga;
