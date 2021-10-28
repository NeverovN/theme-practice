import React from 'react';
import {useSelector} from 'react-redux';
import {Theme} from '../types/colors';

// selectors
import {getTheme} from '../../posts/redux/selectors/theme';

// can't find the approach to extend {theme: Theme} type to any other props [without internet]
export function withStyles(InnerComponent: React.FC<any & {theme: Theme}>) {
  return function ComponentWithStyles(props: any) {
    const theme = useSelector(getTheme);

    return <InnerComponent {...props} theme={theme} />;
  };
}
