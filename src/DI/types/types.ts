import {IPost} from '../../posts/types/post';

export interface PostRepositoryInterface {
  getPosts: () => Promise<IPost[]>;
}
