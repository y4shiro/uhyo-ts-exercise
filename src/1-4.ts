// 1-4. 配列の型

function f14() {
  function sumOfPos(arr: number[]): number {
    return arr.filter((num) => num >= 0).reduce((acc, num) => acc + num, 0);
  }
  // 別解は Array<number> を使う方法
  // function sumOfPos(arr: Array<number>): number {

  const sum: number = sumOfPos([1, 3, -2, 0]);
}
