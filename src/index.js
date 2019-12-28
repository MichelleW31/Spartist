import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import './index.css';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.spotify.com/v1';
// axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
