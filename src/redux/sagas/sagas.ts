import {all, spawn} from 'redux-saga/effects';

// sagas
import {postSaga} from '../../posts/redux/sagas/sagas';
import {themeSaga} from '../../theme/redux/saga/theme';

export function* rootSaga() {
  const allSagas = [postSaga, themeSaga];
  yield all(allSagas.map(saga => spawn(saga)));
}
