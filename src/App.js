import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'configs/Reactotron';
import Store from 'store';
import Routes from 'routes';

export default function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <ToastContainer
          autoClose={3000}
          position={toast.POSITION.BOTTOM_RIGHT}
          draggablePercent={60}
          style={{ textAlign: 'center' }}
        />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}
