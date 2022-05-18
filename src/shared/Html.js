import React from 'react';
import serialize from 'serialize-javascript';

export default function Html({ children, data, preloadedState, theme }) {
  return (
    <html>
      <head>
        <title>SSR with React Router</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="/bundle.js" defer></script>
        <link href="/main.css" rel="stylesheet" />

        <script>
          window.__INITIAL_DATA__ = {serialize(data)}; window.__THEME__ = '{theme}';
          window.__PRELOADED_STATE__ = {JSON.stringify(preloadedState).replace(/</g, '\\u003c')};
        </script>
      </head>

      <body>
        <div id="app">{children}</div>
      </body>
    </html>
  );
}
