import HomePage from '../page/Home';
import Article from '../page/Article';
import PortfolioOverview from '../page/PortfolioOverview/PortfolioOverview';
import Error from '../page/Error';

export const RouteNames = {
  HOME: 'home',
  PORTFOLIO: 'portfolio',
  ARTICLE: 'article',
  ERROR: 'error',
};

export default [
  {
    path: '/',
    component: HomePage,
    name: RouteNames.HOME,
  },
  {
    path: '/portfolio',
    component: PortfolioOverview,
    name: RouteNames.PORTFOLIO,
  },
  {
    path: '/portfolio/:category/:subcategory/:title',
    component: Article,
    name: RouteNames.ARTICLE,
    props: true,
  },
  {
    path: '/404',
    component: Error,
    name: RouteNames.ERROR,
  },
];
