import { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  //Igual que el useMemo, solo que sirve para memorizar funciones, regresa una función memorizada,
  //que se volverá a procesar cuando algo cambie
  const increment = useCallback((value) => {
    setCounter((c) => c + value);
  }, []);

  useEffect(() => {}, [increment]);

  // const increment = () => {
  //   setCounter(counter + 1);
  // };

  return (
    <div>
      <h1>useCallback Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={increment} />
    </div>
  );
};
