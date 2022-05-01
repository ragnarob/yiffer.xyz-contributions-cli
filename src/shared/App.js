import * as React from "react";
import { NavLink, Route, Routes } from 'react-router-dom';
import routes from './routes';

export default function App({ data }) {
  return (
    <>
      <div>
        <p>Top bar</p>
      </div>

      <Routes>
        {routes.map(route => {
          const { path, component: C, fetchInitialData } = route;

          return (
            <Route
              key={path}
              path={path}
              element={
                <C data={data} fetchInitialData={fetchInitialData} />
              }
            />
          )
        })}

        <Route path="/*" element={<p>NO MATCH</p>} />
      </Routes>
    </>
  );
}