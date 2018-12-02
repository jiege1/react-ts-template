/**
 * 本文件定义
 *
 * 扩展的全局hooks
 */
import * as React from 'react';

type effectCallBack = () => void;
type useDidMountEffect = () => void | effectCallBack;

/**
 * 函数组件didMount时触发
 * componentDidMount
 *
 * @param {useDidMountEffect} effect
 */
export const useDidMount = (effect: useDidMountEffect): void => {

  const [isDidMount, setIsDidMount] = React.useState<boolean>(false);

  React.useEffect(() => {
    let didMountClear: effectCallBack | void;

    if (!isDidMount) {
      didMountClear = effect();
      setIsDidMount(true);
    }

    return () => {
      if (didMountClear) {
        didMountClear();
      }
    };

  });

};

/**
 * 受控表单
 *
 * @param e
 * @param initDate
 * @param {() => void} onChange
 * @returns {(any | (() => void))[]}
 */
export const useFormInput = (e, initDate, onChange?: (value: typeof initDate) => void) => {
  const [value, setValue] = React.useState(initDate);

  return [
    value,
    () => {
      setValue(e.target.value);
      if (onChange) {
        onChange(e.target.value);
      }
    },
  ];
};
