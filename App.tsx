import { useState } from 'react';
import { Text, View, ImageBackground, StatusBar, ActivityIndicator } from 'react-native';

import SearchInput from 'src/components/SearchInput';
import getImageForWeather from 'src/utils/getImageForWeather';

import fetchLocationId from 'src/api/fetchLocationId';
import fetchWeather from 'src/api/fetchWeather';

import styles from './App.styles';

export default function App() {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState('');
  const [temperature, setTemperature] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const changeLocation = async (city: string) => {
    if (!city) return;

    setLoading(true);

    try {
      const locationId = await fetchLocationId(city);
      const { location, weather, temperature } = await fetchWeather(locationId);

      setError(false);
      setLocation(location);
      setWeather(weather);
      setTemperature(temperature);
    } catch (error) {
      setError(true);
      setLocation('');
      setWeather('');
      setTemperature(0);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={getImageForWeather(weather)}
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
                <Text style={[styles.text, styles.textSmall]}>
                  Could not load weather, please try a different city.
                </Text>
              ) : (
                <View>
                  <Text style={[styles.text, styles.textLarge]}>
                    {location}
                  </Text>
                  <Text style={[styles.text, styles.textSmall]}>
                    {weather}
                  </Text>
                  <Text style={[styles.text, styles.textLarge]}>
                    {Math.round(temperature)}°C
                  </Text>
                </View>
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
