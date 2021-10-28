import {IPost} from '../../types/post';
import {IPostReducerState} from '../../types/reducer';

const getRoot = (state: any): IPostReducerState => {
  return state.post;
};

export const getPostIds = (state: any): IPost['id'][] => {
  const root = getRoot(state);
  return root.data.ids;
};

export const getPostById = (state: any, id: IPost['id']): IPost => {
  const root = getRoot(state);
  return root.data.byIds[id];
};
