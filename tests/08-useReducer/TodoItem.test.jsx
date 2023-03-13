import { render, screen } from '@testing-library/react';
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
});
