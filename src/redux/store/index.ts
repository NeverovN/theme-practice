import {createStore, applyMiddleware} from 'redux';

import createSagaMiddleware from '@redux-saga/core';

// reducer
import {rootReducer} from '../reducers';

// middleware
import {rootSaga} from '../sagas/sagas';

export const buildStore = (initialState?: any) => {
  const middleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(middleware),
  );
  middleware.run(rootSaga);

  return store;
};
