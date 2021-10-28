import {createReducer} from '@reduxjs/toolkit';

// actions
import {ThemeActions} from '../actions/theme';

const initialState = {
  theme: 'light',
};

export const themeReducer = createReducer(initialState, builder => {
  builder.addCase(ThemeActions.SET, (_, action) => ({
    theme: action.payload.themeName,
  }));
});
