import {createReducer} from '@reduxjs/toolkit';

// utils
import {normalize} from '../../utils/normalize';

// types
import {IPostReducerState} from '../../types/reducer';

// actions
import {PostReducerActions, success, error} from '../actions/post';

const initialState: IPostReducerState = {
  loading: false,
  error: null,
  data: {
    ids: [],
    byIds: {},
  },
};

export const postReducer = createReducer<IPostReducerState>(
  initialState,
  builder => {
    builder
      .addCase(PostReducerActions.LOADING, state => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(success, (_, action) => ({
        loading: false,
        error: null,
        data: {
          ids: action.payload.map(post => post.id),
          byIds: normalize(action.payload),
        },
      }))
      .addCase(error, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload.error,
      }));
  },
);
