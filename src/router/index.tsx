import * as React from 'react';

const Router: React.SFC<IRouter> = (props) => {
  console.log('props', props);
  return (
    <div>
      Router
    </div>
  );
};

export interface IRouter {

}

export default Router;
