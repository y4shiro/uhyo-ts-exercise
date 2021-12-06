// 3-1. 配列から Map を作る
// function mapFromArray<T, K extends keyof T>(arr: T[], key: K): Map<T[K], T> {
//   const result = new Map();
//   for (const obj of arr) {
//     result.set(obj[key], obj);
//   }
//   return result;
// }

// const data = [
//   { id: 1, name: 'John Smith' },
//   { id: 2, name: 'Mary Sue' },
//   { id: 100, name: 'Taro Yamada' },
// ];

// const dataMap = mapFromArray(data, 'id');

// エラー
// mapFromArray(data, 'age');
