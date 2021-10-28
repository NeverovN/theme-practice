import React from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {withStyles} from '../../../common/hocs/withStyles';

// actions
import {ThemeActions} from '../../redux/actions/theme';

// component
import Button from '../Button/view';

// styles
import styles from './styles';

const ThemeButtonContainer: React.FC = () => {
  const dispatch = useDispatch();
  const setLight = () => dispatch(ThemeActions.SET({themeName: 'light'}));
  const setDark = () => dispatch(ThemeActions.SET({themeName: 'dark'}));
  const setBlue = () => dispatch(ThemeActions.SET({themeName: 'dark-blue'}));
  const ButtonWithStyles = withStyles(Button);
  return (
    <View style={styles.GridStyle}>
      <ButtonWithStyles title="light" onPress={setLight} />
      <ButtonWithStyles title="dark" onPress={setDark} />
      <ButtonWithStyles title="dark-blue" onPress={setBlue} />
    </View>
  );
};

export default React.memo(ThemeButtonContainer);
