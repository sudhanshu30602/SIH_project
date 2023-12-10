/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);


// If the app is running in a web browser, mount it to the 'root' element
if (window.document) {
    const rootTag = document.getElementById('root') || document.getElementById('app');
    AppRegistry.runApplication(appName, { rootTag });
  }
