import express from 'express';
import cors from 'cors';
import ReactDOM from 'react-dom/server';
import * as React from 'react';
import App from '../shared/App';
import serialize from 'serialize-javascript';
import { matchPath } from 'react-router-dom';
import routes from '../shared/routes';
import { StaticRouter } from 'react-router-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../shared/store';
import cookieParser from 'cookie-parser';
import { getCookieToken } from './cookies';
import fs from 'fs';
import yaml from 'js-yaml';

let fileContents = fs.readFileSync('config/cfg.yml', 'utf8');
const config = yaml.load(fileContents);

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.static('dist'));

app.use(async (req, res, next) => {
  let userData = await getCookieToken(req);
  req.userData = userData;

  if (req.cookies && req.cookies[config.themeCookieName]) {
    req.theme = req.cookies[config.themeCookieName];
  } else {
    req.theme = 'light';
  }

  next();
});

app.get('*', async (req, res, next) => {
  const activeRoute = routes.find(route => matchPath(route.path, req.url));

  let data = null;
  if (activeRoute?.fetchInitialData) {
    data = await activeRoute.fetchInitialData(req.path);
  }

  const store = createStore(rootReducer);
  store.dispatch({ type: 'theme/setTheme', payload: req.theme });
  store.dispatch({ type: 'auth/setUser', payload: req.userData });

  const markup = ReactDOM.renderToString(
    <StaticRouter location={req.url}>
      <Provider store={store}>
        <App data={data} theme={req.theme} />
      </Provider>
    </StaticRouter>
  );

  const preloadedState = store.getState();

  res.send(renderFullPage(markup, data, preloadedState, req.theme));
});

function renderFullPage(markup, data, preloadedState, theme) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR with React Router</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="/bundle.js" defer></script>
        <link href="/main.css" rel="stylesheet" />

        <script>
          window.__INITIAL_DATA__ = ${serialize(data)};
          window.__THEME__ = '${theme}';
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')};
        </script>
      </head>

      <body>
        <div id="app">${markup}</div>
      </body>
    </html>
    `;
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
