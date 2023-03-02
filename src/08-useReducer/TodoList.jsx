import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos = [], handleRemoveTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          //
          key={todo.id}
          className="list-group-item d-flex justify-content-between"
        >
          <TodoItem todo={todo} handleRemoveTodo={handleRemoveTodo} />
        </li>
      ))}
    </ul>
  );
};
