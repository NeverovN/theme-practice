import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';

// types
import {IPost} from '../../types/post';

// container
import PostContainer from '../Post/index';
import ThemeButton from '../../../theme/components/ThemeButton/index';

interface IPostListViewProps {
  data: IPost['id'][];
}

const renderItem: ListRenderItem<IPost['id']> = ({item}) => {
  return <PostContainer id={item} />;
};

const PostListView: React.FC<IPostListViewProps> = props => {
  return (
    <FlatList
      ListHeaderComponent={ThemeButton}
      data={props.data}
      renderItem={renderItem}
    />
  );
};

export default React.memo(PostListView);
