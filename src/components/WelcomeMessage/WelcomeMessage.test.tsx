import { render } from '@testing-library/react-native';

import WelcomeMessage from './WelcomeMessage';

describe('WelcomeMessage', () => {
  it('renders successfully', () => {
    const { toJSON } = render(<WelcomeMessage />);

    expect(toJSON()).toMatchSnapshot();
  });
});
