import {call, all, spawn, takeLatest} from 'redux-saga/effects';
import {StatusBar} from 'react-native';

import {THEME_ACTIONS} from '../constants/actions';
import {ThemeActions} from '../actions/theme';

function* setThemeSaga(action: any) {
  action.payload.themeName === 'light'
    ? StatusBar.setBarStyle('dark-content')
    : StatusBar.setBarStyle('light-content');
  yield call(ThemeActions.SET, action.payload);
}

function* watchThemeSaga() {
  yield takeLatest(THEME_ACTIONS.SET, setThemeSaga);
}

export function* themeSaga() {
  const sagas = [watchThemeSaga];
  yield all(sagas.map(saga => spawn(saga)));
}
