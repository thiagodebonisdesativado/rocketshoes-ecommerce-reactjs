import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import 'configs/Reactotron';
import Store from 'store';
import Routes from 'routes';
import GlobalStyle from 'styles/Global';
import { Header } from 'components';

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
