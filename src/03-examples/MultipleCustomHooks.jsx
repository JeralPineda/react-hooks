import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from './';

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
  const { name, url } = !!data && data?.forms[0]; //? !undefined = true, !!undefined = false

  return (
    <div>
      <h1>Breakin Bad Quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote name={name} url={url} />}

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
