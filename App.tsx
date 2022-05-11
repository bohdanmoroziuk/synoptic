import { useState } from 'react';
import { Text, View, ImageBackground, StatusBar, ActivityIndicator } from 'react-native';

import SearchInput from 'src/components/SearchInput';
import WeatherDisplay from 'src/components/WeatherDisplay';

import getImageForWeather from 'src/utils/getImageForWeather';

import fetchLocationId from 'src/api/fetchLocationId';
import fetchWeather from 'src/api/fetchWeather';

import { Weather } from 'src/types';

import commonStyles from './styles';
import styles from './App.styles';

const initialWeather: Weather = {
  location: '',
  weather: '',
  temperature: 0,
}

export default function App() {
  const [weather, setWeather] = useState<Weather>(initialWeather);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const changeLocation = async (city: string) => {
    if (!city) return;

    setLoading(true);

    try {
      const locationId = await fetchLocationId(city);
      const weather = await fetchWeather(locationId);

      setWeather(weather);
      setError(false);
    } catch (error) {
      setWeather(initialWeather);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={getImageForWeather(weather.weather)}
        style={styles.imageContainer}
        imageStyle={styles.image}
      >
        <View style={styles.detailsContainer}>
          <ActivityIndicator
            animating={loading}
            size="large"
            color="white"
          />
          {!loading && (
            <View>
              {error ? (
                <Text style={[commonStyles.text, commonStyles.textSmall]}>
                  Could not load weather, please try a different city.
                </Text>
              ) : (
                <WeatherDisplay weather={weather} />
              )}
            </View>
          )}
          <SearchInput
            placeholder="Search any city"
            onSubmit={changeLocation}
          />
        </View>
      </ImageBackground>
    </View>
  );
}
