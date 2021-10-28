import {IColorscheme, Theme} from '../types/colors';

const light: IColorscheme = {
  primary: '#fff',
  secondary: '#fff',
  body: '#a0a0a0',
  title: '#000',
};

const dark: IColorscheme = {
  primary: '#404040',
  secondary: '#bfbfbf',
  body: '#e6e6e6',
  title: '#bfbfbf',
};

const darkBlue: IColorscheme = {
  primary: '#1f3d7a',
  secondary: '#cce6ff',
  body: '#80bfff',
  title: '#cce6ff',
};

export const THEMES: Record<Theme, IColorscheme> = {
  light,
  dark,
  'dark-blue': darkBlue,
};
