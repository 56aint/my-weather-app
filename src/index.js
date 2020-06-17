import 'raf/polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
// import { location, forecasts } from './data/forecast.json';
// import { forecasts } from './data/forecast.json'


render (<App />, document.getElementById('root'));

/*render (<App name="Aaron" location={location} forecasts={forecasts} />, document.getElementById('root'));*/


