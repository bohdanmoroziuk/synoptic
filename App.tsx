import { Text, View, ImageBackground } from 'react-native';

import SearchInput from 'src/components/SearchInput';
import getImageForWeather from 'src/utils/getImageForWeather';

import styles from './App.styles';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={getImageForWeather('Clear')}
        style={styles.imageContainer}
        imageStyle={styles.image}
      >
        <View style={styles.detailsContainer}>
          <Text style={[styles.text, styles.textLarge]}>
            San Francisco
          </Text>
          <Text style={[styles.text, styles.textSmall]}>
            Light Cloud
          </Text>
          <Text style={[styles.text, styles.textLarge]}>
            24C
          </Text>
          <SearchInput placeholder="Search any city" />
        </View>
      </ImageBackground>
    </View>
  );
}
