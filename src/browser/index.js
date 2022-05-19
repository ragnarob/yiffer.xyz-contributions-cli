import * as React from 'react';
import App from '../shared/App';
import { BrowserRouter } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../shared/store';
import { hydrateRoot } from 'react-dom/client';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let initialData = document.body.getAttribute('data-initialdata');
initialData = initialData ? JSON.parse(initialData) : '';
let initialState = document.body.getAttribute('data-initialstate');
initialState = initialState ? JSON.parse(initialState) : {};

const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware()));

document.body.removeAttribute('data-initialstate');

const container = document.getElementById('app');

hydrateRoot(
  container,
  <BrowserRouter>
    <Provider store={store}>
      <App data={initialData} isBrowser />
    </Provider>
  </BrowserRouter>
);
