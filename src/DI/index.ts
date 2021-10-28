import {FakePostRepository as FakePostRepoClass} from './repositories/FakePostRepository';
import {PostRepository as RealPostRepoClass} from './repositories/RealPostRepository';
import {Repository} from './repositories/PostRepository';

interface DIRepos {
  PostRepo: RealPostRepoClass | FakePostRepoClass;
}

const DI: DIRepos = {
  // default state
  PostRepo: Repository.fake,
};

const registerDependency = (dependency: DIRepos['PostRepo']) => {
  DI.PostRepo = dependency;
};

const getDependency = () => {
  return DI.PostRepo;
};

export const DependencyManager = {
  registerDependency,
  getDependency,
};
