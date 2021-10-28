// utils
import {mapDataToPosts} from '../../posts/utils/mapDataToPosts';
import {validateData} from '../../posts/utils/validateData';

// const
import {FAKE_POSTS} from '../data/fakePosts';

// types
import {PostRepositoryInterface} from '../types/types';

export class FakePostRepository implements PostRepositoryInterface {
  async getPosts() {
    const data = await Promise.resolve(FAKE_POSTS);
    const posts = mapDataToPosts(validateData(data));
    return posts;
  }
}

const repository = new FakePostRepository();

export default repository;
