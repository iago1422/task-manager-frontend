import PropTypes from 'prop-types';
import './TaskList.module.css'; 

function TaskList({ tasks }) { 
  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.description} - {task.responsable} (
            <span>{task.status}</span>)
          </li>
        ))}
      </ul>
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      responsable: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TaskList;
