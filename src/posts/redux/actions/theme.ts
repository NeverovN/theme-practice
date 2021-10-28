import {createAction} from '@reduxjs/toolkit';

// actions
import {THEME_ACTIONS} from '../constants/actions';

const setTheme = createAction<{themeName: 'light' | 'dark' | 'dark-blue'}>(
  THEME_ACTIONS.SET,
);

export const ThemeActions = {
  SET: setTheme,
};
