import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

// actions
import {PostReducerActions} from '../../redux/actions/index';

// selectors
import {getPostIds} from '../../redux/selectors/post';

// view
import PostListView from './view';

const PostListContainer: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(PostReducerActions.REQUEST());
  }, [dispatch]);

  const data = useSelector(getPostIds);
  return <PostListView data={data} />;
};

export default React.memo(PostListContainer);
