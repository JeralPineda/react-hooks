import PropTypes from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({ name, url }) => {
  /*
    *En resumen el uso de cada hook debería ser:

    * useLayoutEffect: si necesita mutar el DOM y / o si necesita realizar mediciones.

    * useEffect: si no necesita interactuar con el DOM o sus cambios de DOM no son observables (la mayoría de las veces debe usar esto).
  */

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    // console.log(pRef.current.getBoundingClientReact());
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
  }, []);

  return (
    <>
      <blockquote
        //
        className="blockquote text-end"
        style={{ display: 'flex' }}
      >
        <p ref={pRef} className="mb-1">
          {name}
        </p>
        <footer className="blockquote-footer">{url}</footer>
      </blockquote>

      <div style={{ marginBottom: '1rem' }}>
        <code>{JSON.stringify(boxSize)}</code>
      </div>
    </>
  );
};

Quote.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
