
import * as React from 'react';
import * as ReactDom from 'react-dom';
import Router from './router';

ReactDom.render(
  <Router />,
  document.getElementById('root') as HTMLElement,
);
