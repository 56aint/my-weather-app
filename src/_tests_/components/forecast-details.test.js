import React from 'react';
import { render, cleanup} from '@testing-library/react';
import ForecastDetails from '../../components/forecast-details';

afterEach(cleanup);

describe('ForecastDetails', () => {
  const mockForecast = {
    date: 1525046400000,
    temperature: {
      max: 16,
      min: 5, 
    },
    humidity: 30,
    wind: {
      speed: 13,
    },
  };

  it('renders correctly', () => {
    const { asFragment } = render(<ForecastDetails forecasts={mockForecast} />);
    expect(asFragment).toMatchSnapshot();
  });
  it('renders the correct amount of props', ()=> {
    const { getByText, getByTestId } = render(
      <ForecastDetails forecasts={mockForecast} />
    );
    //const { getByTestId } = render(
     // <ForecastDetails forcasts={mockForecast}/>
    //);

    expect(getByText('Mon 30th Apr')).toHaveClass('date-more');
    expect(getByTestId('date-id')).toHaveClass('date-more');
    expect(getByText('Max Temperature: 16°c')).toHaveClass('tempMax');
    expect(getByTestId('tempMax-id')).toHaveClass('tempMax');
    expect(getByText('Min Temperature: 5°c')).toHaveClass('tempMin');
    expect(getByTestId('tempMin-id')).toHaveClass('tempMin');
    expect(getByText('Humidity: 30%')).toHaveClass('humidity');
    expect(getByTestId('humidity-id')).toHaveClass('humidity');
    expect(getByText('Wind: 13mph')).toHaveClass('wind');
    expect(getByTestId('wind-id')).toHaveClass('wind');
  });
});