import{ useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TaskForm.module.css';

function TaskForm({ onAddTask }) {
  const [description, setDescription] = useState('');
  const [responsable, setResponsable] = useState('');
  const [status, setStatus] = useState('todo'); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !responsable) return;

    const newTask = { description, responsable, status };
    onAddTask(newTask);

    setDescription('');
    setResponsable('');
    setStatus('todo');
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="description">Descrição:</label>
        <input
          type="text"
          id="description"
          className={styles.formInput}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="responsable">Responsável:</label>
        <input
          type="text"
          id="responsable"
          className={styles.formInput}
          value={responsable}
          onChange={(e) => setResponsable(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="status">Status:</label>
        <select
          id="status"
          className={styles.formInput}
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option value="todo">A Fazer</option>
          <option value="doing">Em Progresso</option>
          <option value="done">Concluído</option>
        </select>
      </div>
      <button className={styles.formButton} type="submit">Adicionar Tarefa</button>
    </form>
  );
}

TaskForm.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default TaskForm;
