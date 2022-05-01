import * as React from "react";
import ReactDOM from "react-dom";
import App from "../shared/App";
import { BrowserRouter } from "react-router-dom";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../shared/store';

const store = createStore(rootReducer, window.__PRELOADED_STATE__)
delete window.__PRELOADED_STATE__

ReactDOM.hydrate(
  <BrowserRouter>
    <Provider store={store}>
      <App data={window.__INITIAL_DATA__} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("app")
);
