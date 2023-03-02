import React from 'react';

export const TodoItem = ({ todo, handleRemoveTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        //
        style={{ cursor: 'pointer' }}
        onClick={() => onToggleTodo(todo.id)}
        className={todo.done ? `align-self-center text-decoration-line-through` : 'align-self-center'}
      >
        {todo.description}
      </span>

      <button
        //
        type="button"
        className="btn btn-danger"
        onClick={() => handleRemoveTodo(todo.id)}
      >
        Borrar
      </button>
    </li>
  );
};
