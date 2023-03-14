import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples';

import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {
  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('debe de mostrar el componente por defecto', () => {
    useFetch.mockReturnValue({ data: null, isLoading: true, hasError: null });

    render(<MultipleCustomHooks />);

    expect(screen.getByText('Cargando...'));
    expect(screen.getByText('BreakingBad Quotes'));

    const nextButton = screen.getByRole('button', { name: 'Next quote' });
    expect(nextButton.disabled).toBeTruthy();

    // screen.debug();
  });

  test('Debe de mostrar un Quote', () => {
    useFetch.mockReturnValue({
      data: [{ name: 'Jeral', url: 'https://pokeapi.co/api/v2/pokemon/1' }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    expect(screen.getByText('Jeral')).toBeTruthy();
    expect(screen.getByText('https://pokeapi.co/api/v2/pokemon/1')).toBeTruthy();

    const nextButton = screen.getByRole('button', { name: 'Next quote' });
    expect(nextButton.disabled).toBeFalsy();

    // screen.debug();
  });

  test('Debe de llamar la función de incrementar', () => {
    useFetch.mockReturnValue({
      data: [{ name: 'Jeral', url: 'https://pokeapi.co/api/v2/pokemon/1' }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole('button', { name: 'Next quote' });
    fireEvent.click(nextButton);
    //Evaluar que la función sea llamada

    expect(mockIncrement).toHaveBeenCalled();
  });
});
