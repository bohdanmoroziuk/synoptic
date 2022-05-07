import { render } from '@testing-library/react-native';

import SearchInput from './SearchInput';

describe('SearchInput', () => {
  it('renders successfully', () => {
    const mockPlaceholder = 'Type here';

    const { toJSON } = render(<SearchInput placeholder={mockPlaceholder} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
