
// 定义CFG全局变量
interface ICFG {
  __publicPath__: string;
  api: {
    todoList: {
      getList: string;
    };
  };
}

declare global {
  interface Window {
    CFG?: ICFG;
  }
}

window.CFG = window.CFG || undefined;
