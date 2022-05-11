import { render, fireEvent } from '@testing-library/react-native';

import SearchInput from './SearchInput';

describe('SearchInput', () => {
  const mockPlaceholder = 'Type here';
  const mockOnSubmit = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders successfully', () => {
    const { toJSON } = render(
      <SearchInput
        placeholder={mockPlaceholder}
        onSubmit={mockOnSubmit}
      />
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('submits the entered search term', () => {
    const { getByPlaceholderText } = render(
      <SearchInput
        placeholder={mockPlaceholder}
        onSubmit={mockOnSubmit}
      />
    );

    const textInput = getByPlaceholderText(mockPlaceholder);

    fireEvent.changeText(textInput, 'Kyiv');

    fireEvent(textInput, 'submitEditing');

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnSubmit).toHaveBeenCalledWith('Kyiv');
  });

  it('does not calls the onSubmit callback if the search term is empty', () => {
    const { getByPlaceholderText } = render(
      <SearchInput
        placeholder={mockPlaceholder}
        onSubmit={mockOnSubmit}
      />
    );

    const textInput = getByPlaceholderText(mockPlaceholder);

    fireEvent(textInput, 'submitEditing');

    expect(mockOnSubmit).not.toHaveBeenCalled();
  });
});
