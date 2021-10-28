import {all, spawn} from 'redux-saga/effects';

// sagas
import {postSaga} from '../../posts/redux/sagas/post';
import {themeSaga} from '../../posts/redux/sagas/theme';

export function* rootSaga() {
  const allSagas = [postSaga, themeSaga];
  yield all(allSagas.map(saga => spawn(saga)));
}
