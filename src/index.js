import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components';
import { CssBaseline } from '@mui/material';
import './index.css';
import './setup';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
