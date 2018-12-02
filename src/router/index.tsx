import * as React from 'react';
import * as css from './index.less';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import RouterData, { IRoute } from 'common/const/routeData';

type buildRoute = (list: IRoute[], parentPath?: string) => React.ReactNode[];

const buildRoute: buildRoute = (list, parentPath = '') => {
  return list.map(item => {
    if (item.children && item.children.length) {
      return buildRoute(item.children, item.path);
    }
    const props = {
      path: parentPath + item.path,
      component: item.component,
      exact: true,
    };
    return <Route key={`route_${item.key}`} {...props} />;
  });
};

export default () => {
  return (
    <div className={css.router}>
      <Router>
        <Switch>
          {buildRoute(RouterData)}
          {/*<Route component={lazyComponent('404')} />*/}
        </Switch>
      </Router>
    </div>
  );
};
