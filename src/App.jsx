import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import Logo from './assets/logo-clinicorp-solutions.svg';
import { fetchTasks, insertTask } from './services/taskService'; // Importa o serviço

function App() {
  const [tasks, setTasks] = useState([]);

  // Função para buscar as tarefas da API
  const loadTasks = async () => {
    try {
      const data = await fetchTasks();
      setTasks(data); // Atualiza as tarefas no estado
    } catch (error) {
      console.error('Erro ao carregar tarefas:', error);
    }
  };

  // Carrega as tarefas ao iniciar o componente
  useEffect(() => {
    loadTasks();
  }, []);

  // Função que será passada para o TaskForm para lidar com a adição de tarefas
  const handleAddTask = async (newTask) => {
    try {
      await insertTask(newTask);
      loadTasks(); // Recarrega as tarefas após a inserção
    } catch (error) {
      console.error('Erro ao adicionar tarefa:', error);
    }
  };

  return (
    <div className="container">
      {/* Adiciona a logo no canto superior direito */}
      <div className="header">
        <img src={Logo} alt="Logo Clinicorp" className="logo" />
      </div>
      <h1>Gerenciador de Tarefas</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
