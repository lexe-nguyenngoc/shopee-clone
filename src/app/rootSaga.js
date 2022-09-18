import { all } from 'redux-saga/effects';

import authSaga from '~/features/Auth/authSaga';
import layoutSaga from '~/layouts/layoutSaga';

function* rootSaga() {
  console.log('[SAGA] - ROOT is running. 💥💥💥');
  yield all([authSaga(), layoutSaga()]);
}

export default rootSaga;
