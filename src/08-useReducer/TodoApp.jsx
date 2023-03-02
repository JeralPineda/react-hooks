import { useTodo } from '../hooks/useTodo';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

export const TodoApp = () => {
  const { todos, handleNewTodo, handleRemoveTodo, handleToggleTodo } = useTodo();

  return (
    <div>
      <h1>
        TodoApp: 10, <small>pendientes: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group">
            <TodoList
              //
              todos={todos}
              handleRemoveTodo={handleRemoveTodo}
              onToggleTodo={handleToggleTodo}
            />
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
