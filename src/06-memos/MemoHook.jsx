import { useMemo, useState } from 'react';
import { useCounter } from '../hooks';

const heavyStuff = (interactionNumber = 100) => {
  for (let i = 0; i < interactionNumber; i++) {
    console.log('Ahi vamos...');
  }

  return `${interactionNumber} iteraciones realizadas`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(400);
  const [show, setShow] = useState(true);

  //Memoriza un valor
  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <div>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />

      <h4>{memorizedValue}</h4>

      <button
        //
        onClick={() => increment()}
        className="btn btn-primary"
      >
        +1
      </button>

      <button
        //
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
