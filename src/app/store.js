import { configureStore } from '@reduxjs/toolkit';
import sagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const saga = sagaMiddleware();

const store = configureStore({
  reducer: {},
  middleware: (defaultMiddleware) => defaultMiddleware().concat(saga),
});

saga.run(rootSaga);

export default store;
