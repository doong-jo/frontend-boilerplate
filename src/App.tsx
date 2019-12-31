import React from 'react';
import { ThemeProvider } from 'styled-components';

import 'App.css';
import GlobalStyles from './commons/style/globalstyle';
import defaultTheme from 'commons/style/themes/default';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <div style={{ textAlign: 'center', marginTop: '10rem' }}>
        <h3>Welcome frontend boilerplate :)</h3>
      </div>
    </ThemeProvider>
  );
};

export default App;
