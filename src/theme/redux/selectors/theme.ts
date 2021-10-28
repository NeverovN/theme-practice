import {IThemeReducerState} from '../../types/reducer';

const getRoot = (state: any): IThemeReducerState => {
  return state.theme;
};

export const getTheme = (state: any): IThemeReducerState['theme'] => {
  const root = getRoot(state);
  return root.theme;
};
