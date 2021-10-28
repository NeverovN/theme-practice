import React from 'react';
import {useSelector} from 'react-redux';
import {Theme} from '../../common/types/colors';

// selectors
import {getTheme} from '../redux/selectors/theme';

export function withStyles(InnerComponent: React.FC<any & {theme: Theme}>) {
  return function ComponentWithStyles(props: any) {
    const theme = useSelector(getTheme);

    return <InnerComponent {...props} theme={theme} />;
  };
}
