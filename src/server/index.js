import express from 'express';
import cors from 'cors';
import ReactDOM, { renderToPipeableStream } from 'react-dom/server';
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
import compression from 'compression';
import Html from '../shared/Html';

let fileContents = fs.readFileSync('config/cfg.yml', 'utf8');
const config = yaml.load(fileContents);

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.static('dist'));
app.use(compression());

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

  let didError = false;
  const preloadedState = store.getState();

  const stream = renderToPipeableStream(
    <Html data={data} theme={req.theme} preloadedState={preloadedState}>
      <StaticRouter location={req.url}>
        <Provider store={store}>
          <App data={data} />
        </Provider>
      </StaticRouter>
    </Html>,
    {
      onShellReady() {
        // The content above all Suspense boundaries is ready.
        // If something errored before we started streaming, we set the error code appropriately.
        res.statusCode = didError ? 500 : 200;
        res.setHeader('Content-type', 'text/html');
        stream.pipe(res);
      },
      onShellError(error) {
        // Something errored before we could complete the shell so we emit an alternative shell.
        res.statusCode = 500;
        res.send('<!doctype html><p>Loading...</p><script src="clientrender.js"></script>');
      },
      onAllReady() {
        // If you don't want streaming, use this instead of onShellReady.
        // This will fire after the entire page content is ready.
        // You can use this for crawlers or static generation.
        // res.statusCode = didError ? 500 : 200;
        // res.setHeader('Content-type', 'text/html');
        // stream.pipe(res);
      },
      onError(err) {
        didError = true;
        console.error(err);
      },
    }
  );
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
