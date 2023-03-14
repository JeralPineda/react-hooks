import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const initialState = [];

const init = () => {
  let lc = null;
  if (typeof window !== 'undefined') {
    lc = localStorage.getItem('todos');
  }

  return JSON.parse(lc) || [];
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    //creando acción
    const action = {
      type: '[TODO] Add Todo',
      payload: todo,
    };

    //Disparo la acción
    dispatch(action);
  };

  const handleRemoveTodo = (id) => {
    //Disparo la acción
    dispatch({
      type: '[TODO] Remove Todo',
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    //Disparo la acción
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: id,
    });
  };

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo,
  };
};
