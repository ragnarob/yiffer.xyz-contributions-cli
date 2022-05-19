import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AuthModal from './components/auth/AuthModal';
import NavBar from './components/NavBar/NavBar';
import routes from './routes';
import './styles/general.scss';

export default function App({ data }) {
  const storeTheme = useSelector(state => state.theme);

  return (
    <div data-theme={storeTheme.theme} id="rootdiv">
      <NavBar />
      <AuthModal />

      <Routes>
        {routes.map(route => {
          const { path, component: C, fetchInitialData } = route;

          return (
            <Route
              key={path}
              path={path}
              element={<C data={data} fetchInitialData={fetchInitialData} />}
            />
          );
        })}

        <Route path="/*" element={<p>NO MATCH</p>} />
      </Routes>
    </div>
  );
}
