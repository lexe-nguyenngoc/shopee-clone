import { configureStore } from '@reduxjs/toolkit';
import sagaMiddleware from 'redux-saga';

import rootSaga from './rootSaga';

import authReducer, {
  ROOT_STATE_NAME as auth,
} from '~/features/Auth/authSlice';
import layoutReducer, {
  ROOT_STATE_NAME as layout,
} from '~/layouts/layoutSlice';

const saga = sagaMiddleware();

const store = configureStore({
  reducer: {
    [auth]: authReducer,
    [layout]: layoutReducer,
  },
  middleware: (defaultMiddleware) => defaultMiddleware().concat(saga),
});

saga.run(rootSaga);

export default store;
