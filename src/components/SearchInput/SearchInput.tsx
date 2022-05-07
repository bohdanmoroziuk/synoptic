import { FunctionComponent, useState } from 'react';
import { View, TextInput, TextInputProps } from 'react-native';

import styles from './SearchInput.styles';

export interface SearchInputProps {
  placeholder: TextInputProps['placeholder'];
  onSubmit: (text: string) => void;
}

const SearchInput: FunctionComponent<SearchInputProps> = ({ placeholder, onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmitEditing = () => {
    const normalizedSearchTerm = searchTerm.trim();

    if (normalizedSearchTerm === '') return;

    onSubmit(normalizedSearchTerm);
    setSearchTerm('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        autoCorrect={false}
        placeholder={placeholder}
        placeholderTextColor="white"
        underlineColorAndroid="transparent"
        clearButtonMode="always"
        value={searchTerm}
        onChangeText={setSearchTerm}
        onSubmitEditing={handleSubmitEditing}
      />
    </View>
  );
};

export default SearchInput;
