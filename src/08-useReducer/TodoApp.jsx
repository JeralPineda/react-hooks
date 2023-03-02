import { useEffect, useReducer } from 'react';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const initialState = [
  // {
  //   id: new Date().getTime(),
  //   description: 'Recolectar la piedra del alma',
  //   done: false,
  // },
  // {
  //   id: new Date().getTime() * 3,
  //   description: 'Recolectar la piedra del tiempo',
  //   done: false,
  // },
];

const init = () => {
  return JSON.parse(localStorage.getItem('todos') || []);
};

export const TodoApp = () => {
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

  return (
    <div>
      <h1>
        TodoApp: 10, <small>pendientes: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group">
            <TodoList todos={todos} />
          </ul>
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />

          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>
      </div>
    </div>
  );
};
