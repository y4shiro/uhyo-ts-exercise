// 1-3. 関数の型

function f13() {
  type IsPositiveFunc = (num: number) => boolean;

  const isPositive: IsPositiveFunc = (num) => num >= 0;

  isPositive(5);
}
