import * as React from 'react';
import lazyComponent from 'components/lazyComponent';

export interface IRoute {
  key: string;
  label: string;
  path: string;
  component: () => React.ReactNode;
  isAuth?: boolean;
  children?: IRoute[];
}

const routeData: IRoute[] = [
  {
    key: 'home',
    label: '首页',
    path: '/',
    component: lazyComponent('home'),
    isAuth: true,
    children: [],
  },
];

export default routeData;
