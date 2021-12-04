// 1-1. 関数に型をつけよう

function f11() {
  function isPositive(num: number): boolean {
    return num >= 0;
  }

  const ans1 = isPositive(3);

  // isPositive('123'); // string を渡しているのでエラー
}
