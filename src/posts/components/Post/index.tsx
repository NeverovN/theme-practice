import React from 'react';
import {useSelector} from 'react-redux';
import {withStyles} from '../../../common/hocs/withStyles';
import {getPostById} from '../../redux/selectors/post';

// types
import {IPost} from '../../types/post';

// view
import PostView from './view';

interface IPostContainerProps {
  id: IPost['id'];
}

const PostContainer: React.FC<IPostContainerProps> = props => {
  const post = useSelector(state => getPostById(state, props.id));
  const PostWithStyles = withStyles(PostView);
  return <PostWithStyles title={post.title} body={post.body} />;
};

export default React.memo(PostContainer);
