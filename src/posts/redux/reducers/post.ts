import {createReducer} from '@reduxjs/toolkit';
import {IPostReducerState} from '../../types/reducer';
import {normalize} from '../../utils/normalize';

// actions
import {PostReducerActions, success, error} from '../actions/index';

const initialState = {
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
