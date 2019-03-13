import * as React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
  // HashRouter as Router,
} from 'react-router-dom';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import loadableComponent from './loadableComponent';

const CounterContainer = () => import('containers/CounterContainer');
const HomeContainer = () => import('containers/HomeContainer');
const NoMatchContainer = () => import('containers/NoMatchContainer');

const routes = (
  <Router>
    <LocaleProvider locale={zhCN}>
      <Switch>
        <Route exact path="/" component={loadableComponent(HomeContainer)} />
        <Route path='/counter' component={loadableComponent(CounterContainer)} />
        <Route component={loadableComponent(NoMatchContainer)} />
      </Switch>
    </LocaleProvider>
  </Router>
);

export default routes;
