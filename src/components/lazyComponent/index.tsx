
import * as React from 'react';
import { Spin } from 'antd';

export default function lazyComponent(path: string): () => React.ReactNode {

  let Com = null;

  return () => {

    const [hasCom, setHasCom] = React.useState<boolean>(false);

    React.useEffect(() => {
      if (!hasCom) {
        import('pages/' + path).then((res: { default: React.ComponentType }) => {
          Com = res.default;
          setHasCom(true);
        }).catch(res => {
          console.error('lazyComponent error:', res);
        });
      }

      return () => {
        Com = null;
      };
    });

    return Com ? <Com /> : <Spin size="large" style={{ width: '100%', margin: '40px 0' }} />;
  };

}
