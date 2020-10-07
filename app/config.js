import Config from 'react-native-config';
import locales from './i18n/locales/index';

export default {
  api: Config.API_URL,
  // version number
  version: Config.VERSION,
  // bundle id for last version fetch
  iosBundleId: 'com.tky2048.template2048',
  i18n: locales,
  env: Config.ENVIROMENT,
};
