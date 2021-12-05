// 3-2. Partial

type MyPartial<T> = {
  [K in keyof T]?: T[K];
};

function f32() {
  type T1 = MyPartial<{
    foo: number;
    bar: string;
  }>;

  type T2 = MyPartial<{
    hoge: {
      piyo: number;
    };
  }>;
}
