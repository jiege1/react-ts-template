
import * as Mock from 'mockjs';
import * as qs from 'qs';
import { IOutput } from './types';

export const output: IOutput = (data, code = 0, msg = '', notice = '') => {
  return Mock.mock({
    code,
    msg,
    notice,
    data,
  });
};

export function queryString(url: string) {
  if (url.indexOf('?') !== -1) {
    url = url.split('?')[1];
  }
  return qs.parse(url);
}
