import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from 'styles/Global';
import Routes from 'routes';
import { Header, Footer } from 'components';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Footer />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
