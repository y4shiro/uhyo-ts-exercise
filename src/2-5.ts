// 2-5. useState

type UseStateUpdateArgument<T> = T | ((oldValue: T) => T);

declare function useState<T>(
  initialValue: T
): [T, (updator: UseStateUpdateArgument<T>) => void];

const [numState, setNumState] = useState(0);

setNumState(3);
setNumState((state) => state + 10);

// 型引数の明示も可能
const [another, setAnother] = useState<number | null>(null);
setAnother(100);
