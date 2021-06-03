import React from 'react';

import { Router } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import GlobalStyles from './styles/globalStyles';

import Header from './components/header';

import Routes from './routes';

import history from './services/history';

import store, { persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Header />
          <Routes />
          <GlobalStyles />
          <ToastContainer autoClose={3000} className="toast-container" />
        </Router>
      </PersistGate>

      <h2
        style={{ display: 'flex', justifyContent: 'center', fontWeight: '400' }}
      >
        Developed by Leonardo Bispo
      </h2>
    </Provider>
  );
}

export default App;
