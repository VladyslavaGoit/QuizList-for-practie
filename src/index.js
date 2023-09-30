import { App } from 'components/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    blue: 'lightskyblue',
    yellow: 'antiquewhite',
    red: 'lightpink',
  },
  radii: {
    sm: '2px',
    md: '8px',
    lg: '16px',
  },
  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/QuizList-for-practie">
      <ThemeProvider theme={theme}>
        <App />{' '}
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
