// 2-3. 省略可能なプロパティ

interface Options {
  capture?: boolean;
  once?: boolean;
  passive?: boolean;
}

declare function addEventListener(
  elm1: string,
  elm2: () => void,
  elm3?: boolean | Options
): void;
