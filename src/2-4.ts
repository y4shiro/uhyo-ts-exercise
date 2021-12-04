// 2-4. プロパティを 1 つ増やす関数

function giveId<T>(obj: T): T & { id: string } {
  const id = 'moji';
  return {
    ...obj,
    id,
  };
}

const obj1: { id: string; foo: number } = giveId({ foo: 123 });
const obj2: { id: string; num: number; hoge: boolean } = giveId({
  num: 0,
  hoge: true,
});
