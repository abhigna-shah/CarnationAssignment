/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Home from './src/pages/HomePage';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Home);
