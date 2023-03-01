import { useRef } from 'react';

export const FocusScreen = () => {
  //mantener una referencia y cuando exista un cambio no re rendrice
  const inputRef = useRef();

  const onClick = () => {
    // document.querySelector('input').select();
    // console.log(inputRef);
    inputRef.current.select();
  };

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />

      <input
        //
        ref={inputRef}
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
      />

      <button
        //
        className="btn btn-primary mt-2"
        onClick={onClick}
      >
        Set focus
      </button>
    </div>
  );
};
