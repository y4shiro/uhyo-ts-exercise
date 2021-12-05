// 4-2. プロパティを上書きする関数

function f42() {
  function giveId<T>(obj: T): Pick<T, Exclude<keyof T, 'id'>> & { id: string } {
    const id = 'moji';
    return {
      ...obj,
      id,
    };
  }
  // 別解: conditional type を使った場合
  // function giveId<T>(
  //   obj: T
  // ): { [K in keyof T]: K extends 'id' ? string : T[K] } & { id: string } {
  //   const id = 'moji';
  //   return {
  //     ...obj,
  //     id,
  //   } as any;
  // }

  const obj1 = giveId({ foo: 123 });
  const obj2 = giveId({
    num: 0,
    hoge: true,
  });
  const obj3 = giveId({
    id: 'id',
    num: 3,
    hoge: false,
  });

  obj2.id = '';
}
