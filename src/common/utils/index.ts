
namespace Utils {

    /**
     * 是否是本地开发环境
     *
     * @returns {boolean}
     */
    export const isLocal = (): boolean => {
      return process.env.NODE_ENV === 'development';
    };

    export const sum = (a: number, b: number): number => {
      return a + b;
    };
}
