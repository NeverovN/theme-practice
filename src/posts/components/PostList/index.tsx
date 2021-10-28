import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

// actions
import {PostReducerActions} from '../../redux/actions/post';

// selectors
import {getPostIds, getLoading} from '../../redux/selectors/post';

// view
import PostListView from './view';

const PostListContainer: React.FC = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getLoading);
  const onRefresh = () => {
    dispatch(PostReducerActions.REQUEST());
  };

  React.useEffect(() => {
    dispatch(PostReducerActions.REQUEST());
  }, [dispatch]);

  const data = useSelector(getPostIds);
  return (
    <PostListView data={data} refreshing={isRefreshing} onRefresh={onRefresh} />
  );
};

export default React.memo(PostListContainer);
