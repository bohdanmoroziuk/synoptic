import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
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
});
