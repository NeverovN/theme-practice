import {IPost} from '../../../types/post';
import {IPostReducerState} from '../../../types/reducer';
import {getRoot, getPostIds, getLoading, getPostById} from '../post';

describe('pest selectors test unit', () => {
  describe('getRoot test unit', () => {
    it('should return expected state 1', () => {
      const initialState = {
        post: {
          loading: false,
          error: null,
          data: {
            ids: [],
            byIds: {},
          },
        },
      };
      const expectedState = {...initialState.post};
      const root = getRoot(initialState);
      expect(root).toStrictEqual(expectedState);
    });
    it('should return expected state 2', () => {
      const initialState = {
        post: {
          loading: true,
          error: null,
          data: {
            ids: [],
            byIds: {},
          },
        },
      };
      const expectedState = {...initialState.post};
      const root = getRoot(initialState);
      expect(root).toStrictEqual(expectedState);
    });
    it('should return expected state 3', () => {
      const initialState = {
        post: {
          loading: false,
          error: 'Some error',
          data: {
            ids: [],
            byIds: {},
          },
        },
      };
      const expectedState = {...initialState.post};
      const root = getRoot(initialState);
      expect(root).toStrictEqual(expectedState);
    });
  });

  const post1: IPost = {id: 1, userId: 1, title: 'title1', body: 'body1'};
  const post2: IPost = {id: 2, userId: 2, title: 'title2', body: 'body2'};
  const post3: IPost = {id: 3, userId: 3, title: 'title3', body: 'body3'};

  describe('getPostIds test unit', () => {
    it('should return []', () => {
      const initialState = {
        post: {
          loading: false,
          error: null,
          data: {
            ids: [],
            byIds: {},
          },
        },
      };
      const expectedIds: IPostReducerState['data']['ids'] = [];
      const root = getPostIds(initialState);
      expect(root).toStrictEqual(expectedIds);
    });

    it('should return [post1.id, post2.id, post3.id]', () => {
      const initialState = {
        post: {
          loading: false,
          error: null,
          data: {
            ids: [post1.id, post2.id, post3.id],
            byIds: {
              [post1.id]: post1,
              [post2.id]: post2,
              [post3.id]: post3,
            },
          },
        },
      };
      const expectedIds: IPostReducerState['data']['ids'] = [
        post1.id,
        post2.id,
        post3.id,
      ];
      const root = getPostIds(initialState);
      expect(root).toStrictEqual(expectedIds);
    });
  });
});
