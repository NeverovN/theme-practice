import {IPost} from './post';

export interface IPostReducerState {
  loading: boolean;
  error: string | null;
  data: {ids: IPost['id'][]; byIds: Record<IPost['id'], IPost>};
}
