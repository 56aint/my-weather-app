import React from 'react';
import { cleanup, render } from '@testing-library/react';
import ForecastSummaries from '../../components/forecast-summaries';
// import forecast from '../../data/forecast.json';

const forecasts = [
  {
    date: 123,
    description: 'date',
    icon: 'icon1',
    temperature: {
      max: 999,
    },
  },
  {
    date: 456,
    description: 'date2',
    icon: 'icon2',
    temperature: {
      max: 777,
    },
  }
];

afterEach(cleanup);

decsribe("ForecastSummaries", () => {
  const forecasts = [
    {
      date: 123,
      description: 'date',
      icon: 'icon1',
      temperature: {
        max: 999,
      }
    },
    {
      date: 456,
      description: 'date2',
      icon: 'icon2',
      temperature: {
        max: 777,
      },
    },
  ];

  it("renders correctly to match ForcastSummaries snapshot", () => {
    const { asFragment } = render(<ForecastSummaries forecasts={forecasts} />);

    expect(asFragment).toMatchSnapshot();
  });
  
  it("renders the correct amount of ForecastSummary props", () => {

  });
});