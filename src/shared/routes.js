import { getComic, getSomeData } from './api';
// import Comic from './pages/DemoWithDataFetech';
import Home from './pages/Home/Home';
import Upload from './pages/Upload/Upload';

const routes = [
  {
    path: '/',
    component: Home,
    fetchInitialData: () => getSomeData(),
  },
  {
    path: '/upload',
    component: Upload,
    // fetchInitialData: function (path) {
    //   const comicName = path.split('/').pop();
    //   return getComic(comicName);
    // },
  }
]

export default routes;