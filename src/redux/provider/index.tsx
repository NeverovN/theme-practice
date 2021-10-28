import React from 'react';
import {Provider} from 'react-redux';

// store
import {buildStore} from '../store';

const ReduxProvider: React.FC = props => {
  const store = buildStore();
  return <Provider store={store}>{props.children}</Provider>;
};

export default React.memo(ReduxProvider);
