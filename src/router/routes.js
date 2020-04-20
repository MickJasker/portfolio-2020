import HomePage from '../page/Home';
import Article from '../page/Article';
import PortfolioOverview from '../page/PortfolioOverview/PortfolioOverview';
import Error from '../page/Error';
import ReadGuide from '../page/ReadGuide';

export const RouteNames = {
  HOME: 'Home',
  PORTFOLIO: 'Portfolio',
  ARTICLE: 'Artikel',
  ERROR: 'Error',
  READ_GUIDE: 'Leeswijzer',
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
  {
    path: '/leeswijzer',
    component: ReadGuide,
    name: RouteNames.READ_GUIDE,
  },
];
