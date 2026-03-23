import { Card } from '$/common/components/card';
import {
  useReducer,
  useState,
  type ComponentPropsWithoutRef,
  type Dispatch,
  type FormEvent,
} from 'react';

import { Button } from './button';
import { counterReducer, initialState } from './counter-reducer';

type CounterControlsProps = {
  setCounter: Dispatch<React.SetStateAction<number>>;
};

function CounterControl({ setCounter }: CounterControlsProps) {
  return (
    <div className="flex gap-2">
      <Button onClick={() => setCounter((prev) => prev - 1)}>➖ Decrement</Button>
      <Button onClick={() => setCounter(0)}>🔁 Reset</Button>
      <Button onClick={() => setCounter((prev) => prev + 1)}>➕ Increment</Button>
    </div>
  );
}

function CounterForm({ onSubmit }: ComponentPropsWithoutRef<'form'>) {
  return (
    <form className="flex items-center gap-2" onSubmit={onSubmit}>
      <input
        className="ring-primary-600 focus:border-primary-800 rounded border border-slate-500 px-4 py-2 outline-none focus:ring-2"
        type="number"
        value={0}
      />
      <Button>Update Counter</Button>
    </form>
  );
}

export const Counter = () => {
  // const [counter, setCounter] = useState<number>(0);
  const [counter, dispatch] = useReducer(counterReducer, initialState);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const raw = formData.get('counter'); // string | File | null

    setCounter(Number(raw));
  }

  return (
    <Card className="border-primary-500 flex w-2/3 flex-col items-center gap-8">
      <h1>Days Since the Last Accident</h1>
      <p className="text-6xl">{counter}</p>

      <CounterControl setCounter={setCounter} />
      <CounterForm onSubmit={handleSubmit} />
    </Card>
  );
};
