import React from 'react';
import {withStyles} from '../../../common/hocs/withStyles';

// view
import ScreenView from './view';

const Screen: React.FC = () => {
  const ScreenWithStyles = withStyles(ScreenView);
  return <ScreenWithStyles />;
};

export default React.memo(Screen);
