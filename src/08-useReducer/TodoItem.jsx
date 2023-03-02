import React from 'react';

export const TodoItem = ({ todo }) => {
  return (
    <>
      <span className="align-self-center">{todo.description}</span>
      <button
        //
        type="button"
        className="btn btn-danger"
      >
        Borrar
      </button>
    </>
  );
};
