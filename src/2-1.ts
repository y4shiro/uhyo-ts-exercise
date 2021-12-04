// 2-1. 配列の型

function f21() {
  function myFilter<T>(arr: T[], predicate: (elm: T) => boolean): T[] {
    const result = [];
    for (const elm of arr) {
      if (predicate(elm)) {
        result.push(elm);
      }
    }
    return result;
  }

  const res = myFilter([1, 2, 3, 4, 5], (num) => num % 2 === 0);
  const res2 = myFilter(['foo', 'hoge', 'bar'], (str) => str.length >= 4);
}
