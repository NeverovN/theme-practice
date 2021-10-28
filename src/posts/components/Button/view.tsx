import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

// style
import {useStyles} from '../../../common/hooks/useStyles';
import styles from './styles';
import {Theme} from '../../../common/types/colors';

interface IButtonViewProps {
  title: string;
  theme: Theme;
  onPress(): void;
}

const ButtonView: React.FC<IButtonViewProps> = props => {
  const dynamicsStyles = useStyles(props.theme);
  return (
    <View style={styles.buttonStyle}>
      <TouchableOpacity
        style={[styles.opacityStyle, dynamicsStyles.secondary]}
        onPress={props.onPress}>
        <Text style={styles.textStyle}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(ButtonView);
