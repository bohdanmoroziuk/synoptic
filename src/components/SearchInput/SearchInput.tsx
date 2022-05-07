import { FunctionComponent } from 'react';
import { View, TextInput, TextInputProps } from 'react-native';

import styles from './SearchInput.styles';

export interface SearchInputProps {
  placeholder: TextInputProps['placeholder'];
}

const SearchInput: FunctionComponent<SearchInputProps> = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        autoCorrect={false}
        placeholder={placeholder}
        placeholderTextColor="white"
        underlineColorAndroid="transparent"
        clearButtonMode="always"
      />
    </View>
  );
};

export default SearchInput;
