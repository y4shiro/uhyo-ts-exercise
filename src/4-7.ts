// 4-7. 条件を満たすキーだけを抜き出す
type KeysOfType<Obj, Val> = {
  [K in keyof Obj]-?: Obj[K] extends Val ? K : never;
}[keyof Obj];

// 使用例
type Data = {
  foo: string;
  bar: number;
  baz: boolean;
  hoge?: string;
  fuga: string;
  piyo?: number;
};

// 型は "foo" | "fuga"
// "hoge" は string | undefined なので含まない
type StringKeys = KeysOfType<DataTransfer, string>;

function useNumber<Obj>(obj: Obj, key: KeysOfType<Obj, number>) {
  // ここはやむを得ず any を使っている
  const num: number = (obj as any)[key];
  return num * 10;
}

declare const data: Data;

useNumber(data, 'bar'); // OK
// useNumber(data, 'baz'); // これは型エラー
