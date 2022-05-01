import { getComic, getSomeData } from './api';
import Comic from './Comic';
import Home from './Home';

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