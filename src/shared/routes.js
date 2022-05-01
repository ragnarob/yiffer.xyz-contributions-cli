import { getComic, getSomeData } from './api';
import Comic from './pages/Comic';
import Home from './pages/Home';

const routes = [
  {
    path: '/',
    component: Home,
    fetchInitialData: () => getSomeData(),
  },
  {
    path: '/comic/:comicName',
    component: Comic,
    fetchInitialData: function (path) {
      const comicName = path.split('/').pop();
      return getComic(comicName);
    },
  }
]

export default routes;