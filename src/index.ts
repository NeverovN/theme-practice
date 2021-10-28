import {AppRegistry} from 'react-native';
import App from './app/components/App';
import {name as appName} from '../app.json';

// DI
import {DependencyManager} from './DI';
import {Repository} from './DI/repositories/PostRepository';

export const initApp = () => {
  DependencyManager.registerDependency(Repository.fake);
  AppRegistry.registerComponent(appName, () => App);
};
