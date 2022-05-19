import { getComic } from './api';
import DemoWithDataFetch from './pages/DemoWithDataFetech';
import Home from './pages/Home/Home';
import Upload from './pages/Upload/Upload';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/upload',
    component: Upload,
  },

  // The following is just to illustrate how to do data fetching that a route needs on the server.
  // In the component, use the useSSRData hook, and here, add the fetchInitialData field.
  {
    path: '/demo-data-fetch/:comicName',
    component: DemoWithDataFetch,
    fetchInitialData: function (path) {
      const comicName = path.split('/').pop();
      return getComic(comicName);
    },
  },
];

export default routes;
