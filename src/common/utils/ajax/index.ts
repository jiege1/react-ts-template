import axios from 'axios';

interface IAjaxQuery<P> {
  url: string;
  params?: P;
  method?: string;
}

/**
 * Ajax.query({url, params, method = 'get'})
 *
 */
export default class Ajax {

  public static query<P, D>(config: IAjaxQuery<P>): Promise<D> {

    const { url, method = 'get' } = config;
    let params = config.params || {};

    if (method === 'get') {
      params = { params };
    }

    return new Promise((resolve, reject) => {
      axios[method](url, params).then(res => {
        const { data, code, msg } = res.data;
        if (!code) {
          resolve(data);
        } else {
          reject(msg);
        }
      }).catch(err => {
        reject(err);
      });
    });
  }
}
