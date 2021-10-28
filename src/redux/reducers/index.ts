import {combineReducers} from '@reduxjs/toolkit';

// reducers
import {postReducer} from '../../posts/redux/reducers/post';
import {themeReducer} from '../../theme/redux/reducer/theme';

export const rootReducer = combineReducers({
  post: postReducer,
  theme: themeReducer,
});
