import {createReducer} from '@reduxjs/toolkit';

// types
import {IThemeReducerState} from '../../types/reducer';

// actions
import {ThemeActions} from '../actions/theme';

const initialState: IThemeReducerState = {
  theme: 'light',
};

export const themeReducer = createReducer(initialState, builder => {
  builder.addCase(ThemeActions.SET, (_, action) => ({
    theme: action.payload.themeName,
  }));
});
