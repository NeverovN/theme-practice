import {combineReducers} from '@reduxjs/toolkit';

// reducers
import {postReducer} from '../../posts/redux/reducers/post';
import {themeReducer} from '../../posts/redux/reducers/theme';

export const rootReducer = combineReducers({
  post: postReducer,
  theme: themeReducer,
});
