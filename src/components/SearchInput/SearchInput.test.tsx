import { render, fireEvent, waitFor } from '@testing-library/react-native';

import SearchInput from './SearchInput';

describe('SearchInput', () => {
  const mockPlaceholder = 'Type here';
  const mockOnSubmit = jest.fn();

  it('renders successfully', () => {
    const { toJSON } = render(
      <SearchInput
        placeholder={mockPlaceholder}
        onSubmit={() => {}}
      />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
