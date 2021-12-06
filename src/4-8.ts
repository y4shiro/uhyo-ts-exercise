// 4-7. 条件を満たすキーだけを抜き出す
function f48() {
  type PickUndefined<Obj> = {
    [K in keyof Obj]-?: undefined extends Obj[K] ? K : never;
  }[keyof Obj];
  type MapToNever<Obj> = {
    [K in keyof Obj]: never;
  };
  type OptionalKeys<Obj> = PickUndefined<MapToNever<Obj>>;

  // 使用例
  type Data = {
    foo: string;
    bar?: number;
    baz?: boolean;
    hoge: undefined;
    piyo?: undefined;
  };

  // "bar" | "baz" | "piyo"
  type T = OptionalKeys<Data>;
}
