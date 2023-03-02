import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ handleNewTodo }) => {
  const { onInputChange, onResetForm, description } = useForm({ description: '' });

  const onSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    handleNewTodo && handleNewTodo(newTodo);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        //
        type="text"
        name="description"
        placeholder="¿Que hay que hacer?"
        className="form-control"
        onChange={onInputChange}
        value={description}
      />

      <button
        //
        type="submit"
        className="btn btn-outline-primary mt-2"
      >
        Agregar
      </button>
    </form>
  );
};
