import pages from './pages';
import * as React from "react";
import {RouteComponentProps} from "react-router";

/*interface*/
interface IStaticRoutes {
  path: string,
  component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>,
  exact?: boolean,
  title?: string,
  metas?: any[],
  redirectTo?: string,
}

const staticRotes: IStaticRoutes[] = [
  {
    path: '/',
    component: pages.HomeContainer,
    exact: true,
    title: '主页',
    metas: [],
  },
  {
    path: '/count',
    component: pages.CounterContainer,
    exact: true,
    title: '计数器',
    metas: [],
  },
  {
    path: '',
    component: pages.NoMatchContainer,
    exact: true,
    title: '没有匹配到',
    metas: [],
  },
  {
    path: '/counter',
    redirectTo: '/count',
  },
];

export default staticRotes;
