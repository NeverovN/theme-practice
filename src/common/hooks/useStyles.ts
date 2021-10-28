import {Theme} from '../types/colors';
import {THEMES} from '../constants/colors';

export const useStyles = (theme: Theme) => {
  const colorScheme = THEMES[theme];
  return {
    primary: {
      backgroundColor: colorScheme.primary,
    },
    secondary: {
      backgroundColor: colorScheme.secondary,
    },
    title: {
      color: colorScheme.title,
    },
    body: {
      color: colorScheme.body,
    },
  };
};
