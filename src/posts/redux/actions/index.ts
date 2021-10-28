import {createAction} from '@reduxjs/toolkit';
import {IPost} from '../../types/post';

// const
import {PostActionNames} from '../constants/actions';

export const request = createAction(PostActionNames.REQUEST);
export const loading = createAction(PostActionNames.LOADING);
export const error = createAction<{error: string}>(PostActionNames.ERROR);
export const success = createAction<IPost[]>(PostActionNames.SUCCESS);

export const PostReducerActions = {
  REQUEST: request,
  LOADING: loading,
  ERROR: error,
  SUCCESS: success,
};
