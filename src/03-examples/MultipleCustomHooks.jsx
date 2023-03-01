import React from 'react';
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
  const { name, url } = !!data && data?.forms[0]; //? !undefined = true, !!undefined = false

  return (
    <div>
      <h1>Breakin Bad Quotes</h1>
      <hr />

      {isLoading ? (
        <div className="alert alert-info text-center">Cargando...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-1">{name}</p>
          <footer className="blockquote-footer">{url}</footer>
        </blockquote>
      )}

      <button
        //
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => increment()}
      >
        Next quote
      </button>
    </div>
  );
};
