import * as React from 'react';
import App from '../shared/App';
import { BrowserRouter } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../shared/store';
import { hydrateRoot } from 'react-dom/client';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  window.__PRELOADED_STATE__,
  composeEnhancers(applyMiddleware())
);

delete window.__PRELOADED_STATE__;

const container = document.getElementById('app');

hydrateRoot(
  container,
  <BrowserRouter>
    <Provider store={store}>
      <App data={window.__INITIAL_DATA__} />
    </Provider>
  </BrowserRouter>
);
