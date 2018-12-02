
export interface IActionCreator<T, P> {
  type: T;
  payload?: P;
}

export type Reducer<S, T> = (state: S, action: IActionCreator<T, S>) => S;
