import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const title = 'The Minimal React App With Webpack Babel Setup To Test React with JEST + RTL';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('app')
);

module.hot.accept(); //you have to define that hot reloading is available and should be used:
