import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('Pruebas en <TodoItem />', () => {
  const todo = {
    id: 1,
    description: 'Piedra del alma',
    done: false,
  };

  const handleRemoveTodo = jest.fn();
  const onToggleTodo = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('debe de mostrar el todo pendiente de completar', () => {
    render(
      <TodoItem
        //
        todo={todo}
        handleRemoveTodo={handleRemoveTodo}
        onToggleTodo={onToggleTodo}
      />
    );

    const liElement = screen.getByRole('listitem');
    expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toBe('align-self-center');

    // screen.debug();
  });

  test('debe de mostrar el todo completado', () => {
    todo.done = true;

    render(
      <TodoItem
        //
        todo={todo}
        handleRemoveTodo={handleRemoveTodo}
        onToggleTodo={onToggleTodo}
      />
    );

    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toContain('align-self-center text-decoration-line-through');

    // screen.debug();
  });

  test('span debe de llamar el toggleTodo cuando se hace click', () => {
    render(
      <TodoItem
        //
        todo={todo}
        handleRemoveTodo={handleRemoveTodo}
        onToggleTodo={onToggleTodo}
      />
    );

    const spanElement = screen.getByLabelText('span');
    fireEvent.click(spanElement);

    //Que halla sido llamada la función con el argumento id
    expect(onToggleTodo).toHaveBeenCalledWith(todo.id);
  });

  test('button debe de llamar el deleteTodo', () => {
    render(
      <TodoItem
        //
        todo={todo}
        handleRemoveTodo={handleRemoveTodo}
        onToggleTodo={onToggleTodo}
      />
    );

    const deleteButton = screen.getByRole('button');
    fireEvent.click(deleteButton);

    //Que halla sido llamada la función con el argumento id
    expect(handleRemoveTodo).toHaveBeenCalledWith(todo.id);
  });
});
