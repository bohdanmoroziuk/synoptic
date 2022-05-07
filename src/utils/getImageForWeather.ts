/* eslint-disable global-require */

import { ImageSourcePropType } from 'react-native';

const images: Record<string, ImageSourcePropType> = {
  Clear: require('../assets/images/clear.png'),
  Hail: require('../assets/images/hail.png'),
  'Heavy Cloud': require('../assets/images/heavy-cloud.png'),
  'Light Cloud': require('../assets/images/light-cloud.png'),
  'Heavy Rain': require('../assets/images/heavy-rain.png'),
  'Light Rain': require('../assets/images/light-rain.png'),
  Showers: require('../assets/images/showers.png'),
  Sleet: require('../assets/images/sleet.png'),
  Snow: require('../assets/images/snow.png'),
  Thunder: require('../assets/images/thunder.png'),
};

export default (weather: string) => images[weather];
