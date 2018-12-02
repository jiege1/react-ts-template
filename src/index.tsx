
import './window';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Router from './router';

ReactDom.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
