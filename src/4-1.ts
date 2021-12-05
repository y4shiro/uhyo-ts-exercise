// 4-1. 無い場合は unknown

function f41() {
  function getFoo<T extends object>(
    obj: T
  ): T extends { foo: infer R } ? R : unknown {
    return (obj as any).foo;
  }

  // 使用例
  const num = getFoo({
    foo: 123,
  });

  const str = getFoo({
    foo: 'hoge',
    bar: 0,
  });

  const unk = getFoo({
    hoge: true,
  });

  // エラー
  // getFoo(123);
  // getFoo(null);
}
