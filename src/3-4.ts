// 3-4. reducer

type IncrementType = {
  type: 'increment';
  amount: number;
};
type DecrementType = {
  type: 'decrement';
  amount: number;
};
type ResetType = {
  type: 'reset';
  value: number;
};

type ActionType = IncrementType | DecrementType | ResetType;

const reducer = (state: number, action: ActionType) => {
  switch (action.type) {
    case 'increment':
      return state + action.amount;
    case 'decrement':
      return state - action.amount;
    case 'reset':
      return action.value;
  }
};

// 使用例
reducer(100, { type: 'increment', amount: 10 }) === 110;
reducer(100, { type: 'decrement', amount: 55 });
