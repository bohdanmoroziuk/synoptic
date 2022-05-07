import { StyleSheet, Text, View, Platform } from 'react-native';

import SearchInput from 'src/components/SearchInput';

export default function App() {
  return (
    <View style={styles.container}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
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
});
