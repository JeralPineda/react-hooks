import { render } from '@testing-library/react';
import { todoReducer } from '../../src/08-useReducer/todoReducer';

describe('Pruebas en todoReducer', () => {
  const initialState = [
    {
      id: 1,
      description: 'Done Todo',
      done: false,
    },
  ];

  test('debe de regresar el estado inicial', () => {
    const newState = todoReducer(initialState, {});

    expect(newState).toBe(initialState);
  });

  test('debe de agregar un todo', () => {
    //
    const action = {
      type: '[TODO] Add Todo',
      payload: {
        id: 2,
        description: 'New Todo',
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload); //evaluar que el arreglo tenga ese objeto
  });

  test('debe de eliminar todo', () => {
    //
    const action = {
      type: '[TODO] Remove Todo',
      payload: {
        id: 2,
        description: 'New Todo',
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(1);
  });

  test('debe de realizar el toggle del todo', () => {
    const action = {
      type: '[TODO] Toggle Todo',
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBe(true);
  });
});
