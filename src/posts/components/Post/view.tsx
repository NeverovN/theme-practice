import React from 'react';
import {View, Text} from 'react-native';

// styles
import styles from './styles';
import {useStyles} from '../../../common/hooks/useStyles';
import {Theme} from '../../../common/types/colors';

interface IPostViewProps {
  theme: Theme;
  title: string;
  body: string;
}

const PostView: React.FC<IPostViewProps> = props => {
  const dynamicStyles = useStyles(props.theme);

  return (
    <View style={styles.postStyle}>
      <Text style={[styles.titleTextStyle, dynamicStyles.title]}>
        {props.title}
      </Text>
      <Text style={[styles.bodyTextStyle, dynamicStyles.body]}>
        {props.body}
      </Text>
    </View>
  );
};

export default React.memo(PostView);
