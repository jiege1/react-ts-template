import { mock, Random } from 'mockjs';
import * as types from 'common/types';
import { output } from './utils';

mock(/mock.bool/, () => {
  return output<types>({
    success: Random.boolean(9, 1, true),
  });
});
