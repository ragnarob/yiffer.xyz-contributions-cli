import * as React from "react";
import ReactDOM from "react-dom";
import App from "../shared/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.hydrate(
  <BrowserRouter>
    <App data={window.__INITIAL_DATA__} />
  </BrowserRouter>,
  document.getElementById("app")
);

res.send(`
 <!DOCTYPE html>
 <html>
   <head>
    <title>SSR with React Router</title>
    <script src="/bundle.js" defer></script>
    <link href="/main.css" rel="stylesheet">
   </head>

   <body>
      <div id="app">${markup}</div>
   </body>
 </html>
`);
