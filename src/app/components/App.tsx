import React from 'react';
// provider
import ReduxProvider from '../../redux/provider/index';

// container
import PostScreen from '../../posts/components/Screen/index';

const App: React.FC = () => {
  return (
    <ReduxProvider>
      <PostScreen />
    </ReduxProvider>
  );
};

export default React.memo(App);
