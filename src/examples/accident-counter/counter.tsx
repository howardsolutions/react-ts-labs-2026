import { Card } from '$/common/components/card';
import { useState, type Dispatch, type FormEvent } from 'react';

type CounterControlsProps = {
  setCounter: Dispatch<React.SetStateAction<number>>;
};

function CounterControl({ setCounter }: CounterControlsProps) {
  return (
    <div className="flex gap-2">
      <button onClick={() => setCounter((prev) => prev - 1)}>➖ Decrement</button>
      <button onClick={() => setCounter(0)}>🔁 Reset</button>
      <button onClick={() => setCounter((prev) => prev + 1)}>➕ Increment</button>
    </div>
  );
}

export const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

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

      <form className="flex items-center gap-2" onSubmit={handleSubmit}>
        <input
          className="ring-primary-600 focus:border-primary-800 rounded border border-slate-500 px-4 py-2 outline-none focus:ring-2"
          type="number"
          value={0}
        />
        <button>Update Counter</button>
      </form>
    </Card>
  );
};
