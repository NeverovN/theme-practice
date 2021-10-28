import React from 'react';
import {SafeAreaView} from 'react-native';
import {Theme} from '../../../common/types/colors';
import {useStyles} from '../../../common/hooks/useStyles';

// components
import PostList from '../PostList/index';

// styles
import styles from './styles';

interface IPostScreen {
  theme: Theme;
}

const PostScreen: React.FC<IPostScreen> = props => {
  const dynamicStyles = useStyles(props.theme);
  return (
    <SafeAreaView style={[styles.screenStyle, dynamicStyles.primary]}>
      <PostList />
    </SafeAreaView>
  );
};

export default React.memo(PostScreen);
