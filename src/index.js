import { App } from 'components/App/App';
import React from 'react';
import ReactDOM from 'react-dom/client';

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
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
