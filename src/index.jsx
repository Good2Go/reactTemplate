import ReactDOM from 'react-dom';
import React from 'react';

// Redux

import configureStore from './stores/index.jsx';

import App from './components/app.jsx';

const store = configureStore();


ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
