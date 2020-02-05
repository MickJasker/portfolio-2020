import HomePage from '../page/Home';
import Article from '../page/Article';
import PortfolioOverview from '../page/PortfolioOverview/PortfolioOverview';

export const RouteNames = {
  HOME: 'home',
  PORTFOLIO: 'portfolio',
  ARTICLE: 'article',
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
    path: '/article',
    component: Article,
    name: RouteNames.ARTICLE,
  },
];
