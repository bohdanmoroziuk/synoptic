import { FunctionComponent } from 'react';
import { View, Text } from 'react-native';

import { Weather } from 'src/types';
import temperatureToHuman from 'src/utils/temperatureToHuman';

import commonStyles from '../../../styles';

export interface WeatherDisplayProps {
  weather: Weather;
}

const WeatherDisplay: FunctionComponent<WeatherDisplayProps> = ({
  weather: {
    location,
    weather,
    temperature,
  },
}) => (
  <View>
    <Text style={[commonStyles.text, commonStyles.textLarge]}>
      {location}
    </Text>
    <Text style={[commonStyles.text, commonStyles.textSmall]}>
      {weather}
    </Text>
    <Text style={[commonStyles.text, commonStyles.textLarge]}>
      {temperatureToHuman(temperature)}
    </Text>
  </View>
);

export default WeatherDisplay;
