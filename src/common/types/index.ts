
// 分页
export interface IPaging {
  pageNum: number;
  pageSize: number;
}

// 通用列表
export interface IList<I> {
  list: I[];
}

// 分页列表
export interface IPagingList<I> extends IList<I>, IPaging {
  total: number;
}

export interface IApiBool {
  success: boolean;
}
