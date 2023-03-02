import React from 'react';

export const TodoItem = ({ todo, handleRemoveTodo }) => {
  return (
    <>
      <span className="align-self-center">{todo.description}</span>
      <button
        //
        type="button"
        className="btn btn-danger"
        onClick={() => handleRemoveTodo(todo.id)}
      >
        Borrar
      </button>
    </>
  );
};
