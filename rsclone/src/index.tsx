import '@/assets/stylesheets/index.scss';

import React from 'react';
import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from '@/App';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
