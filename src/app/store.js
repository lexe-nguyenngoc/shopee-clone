import { configureStore } from '@reduxjs/toolkit';
import sagaMiddleware from 'redux-saga';

import rootSaga from './rootSaga';

import authReducer, {
  ROOT_STATE_NAME as auth,
} from '~/features/Auth/authSlice';
import layoutReducer, {
  ROOT_STATE_NAME as layout,
} from '~/layouts/layoutSlice';
import shoppingReducer, {
  ROOT_STATE_NAME as shopping,
} from '~/features/Shopping/shoppingSlice';

const saga = sagaMiddleware();

const store = configureStore({
  reducer: {
    [auth]: authReducer,
    [layout]: layoutReducer,
    [shopping]: shoppingReducer,
  },
  middleware: (defaultMiddleware) => defaultMiddleware().concat(saga),
});

saga.run(rootSaga);

export default store;
