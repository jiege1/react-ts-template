
export type IOutput = <D>(data: D, code?: number, msg?: string, notice?: string) => {
  data: D;
  code: number;
  msg: string;
  notice: string;
};
