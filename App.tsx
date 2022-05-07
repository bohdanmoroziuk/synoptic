import { StyleSheet, Text, View, Platform, ImageBackground } from 'react-native';

import SearchInput from 'src/components/SearchInput';
import getImageForWeather from 'src/utils/getImageForWeather';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    ...Platform.select({
      ios: {
        fontFamily: 'AvenirNext-Regular',
      },
      android: {
        fontFamily: 'Roboto',
      },
    }),
  },
  textSmall: {
    fontSize: 18,
  },
  textLarge: {
    fontSize: 44,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
});
