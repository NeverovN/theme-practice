import realPostRepository from './RealPostRepository';
import fakePostRepository from './FakePostRepository';

export const Repository = {
  real: realPostRepository,
  fake: fakePostRepository,
};
