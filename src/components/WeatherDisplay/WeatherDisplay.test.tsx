import { render } from '@testing-library/react-native';

import DisplayWeather from './WeatherDisplay';

describe('WeatherDisplay', () => {
  const mockWeather = {
    location: 'Kyiv',
    weather: 'Light Cloud',
    temperature: 18.3,
  };
  
  it('renders correctly', () => {
    const { toJSON } = render(<DisplayWeather weather={mockWeather} />)

    expect(toJSON()).toMatchSnapshot();
  });
});
