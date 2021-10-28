// utils
import {fetchData} from '../../posts/utils/fetchData';
import {mapDataToPosts} from '../../posts/utils/mapDataToPosts';
import {validateData} from '../../posts/utils/validateData';

// types
import {PostRepositoryInterface} from '../types/types';

export class PostRepository implements PostRepositoryInterface {
  async getPosts() {
    const data = await fetchData();
    const posts = mapDataToPosts(validateData(data));
    return posts;
  }
}

const repository = new PostRepository();

export default repository;
