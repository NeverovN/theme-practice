import React from 'react';
import {FlatList, ListRenderItem, RefreshControl} from 'react-native';

// types
import {IPost} from '../../types/post';

// container
import PostContainer from '../Post/index';
import ThemeButton from '../ThemeButton/index';

interface IPostListViewProps {
  data: IPost['id'][];
  refreshing: boolean;
  onRefresh(): void;
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
      refreshControl={
        <RefreshControl
          onRefresh={props.onRefresh}
          refreshing={props.refreshing}
        />
      }
    />
  );
};

export default React.memo(PostListView);
