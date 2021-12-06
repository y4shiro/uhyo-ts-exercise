// 4-4. 一部だけ Partial
function f44() {
  type PartiallyPartial<T, K extends keyof T> = Partial<Pick<T, K>> &
    Pick<T, Exclude<keyof T, K>>;

  interface Data {
    foo: number;
    bar: string;
    baz: string;
  }

  type T1 = PartiallyPartial<Data, 'foo' | 'bar'>;
}
