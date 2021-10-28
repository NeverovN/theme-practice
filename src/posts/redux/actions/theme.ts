import {createAction} from '@reduxjs/toolkit';

// types
import {Theme} from '../../../common/types/colors';

// actions
import {THEME_ACTIONS} from '../constants/actions';

const setTheme = createAction<{themeName: Theme}>(THEME_ACTIONS.SET);

export const ThemeActions = {
  SET: setTheme,
};
