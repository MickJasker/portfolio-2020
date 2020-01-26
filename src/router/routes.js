import HomePage from '../page/Home';

export const RouteNames = {
  HOME: 'home',
};

export default [
  {
    path: '/',
    component: HomePage,
    name: RouteNames.HOME,
  },
];
