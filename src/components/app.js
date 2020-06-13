import React from 'react';
import PropTypes from 'prop-types';

const App = (props) => <h1>{`Hello ${props.name}`}</h1>;

App.propTypes = {
  name: PropTypes.string,
};

App.defaultProps ={
  name: 'World',
};


export default App;
