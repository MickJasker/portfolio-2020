import HomePage from '../page/Home';
import Article from '../page/Article';

export const RouteNames = {
  HOME: 'home',
  ARTICLE: 'article',
};

export default [
  {
    path: '/',
    component: HomePage,
    name: RouteNames.HOME,
  },
  {
    path: '/article',
    component: Article,
    name: RouteNames.ARTICLE,
  },
];
