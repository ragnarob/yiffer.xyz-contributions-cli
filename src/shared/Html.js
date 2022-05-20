import React from 'react';
import serialize from 'serialize-javascript';

export default function Html({ children, data, preloadedState }) {
  return (
    <html>
      <head>
        <title>SSR with React Router</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="/bundle.js" defer></script>
        <link rel="icon" type="image/x-icon" href="public/favicon.ico" />
        <link href="/main.css" rel="stylesheet" />
      </head>

      <body
        data-initialdata={serialize(data)}
        data-initialstate={JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      >
        <div id="app">{children}</div>
      </body>
    </html>
  );
}
