// types
import {IPost} from '../../types/post';
import {IPostReducerState} from '../../types/reducer';

export const getRoot = (state: any): IPostReducerState => {
  return state.post;
};

export const getPostIds = (state: any): IPost['id'][] => {
  const root = getRoot(state);
  console.log(root);
  return root.data.ids;
};

export const getPostById = (state: any, id: IPost['id']): IPost => {
  const root = getRoot(state);
  return root.data.byIds[id];
};

export const getLoading = (state: any): boolean => {
  const root = getRoot(state);
  return root.loading;
};
