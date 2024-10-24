const API_BASE_URL = 'http://localhost:8085';

// Função para buscar todas as tarefas
export const fetchTasks = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/get-tasks`);
    if (!response.ok) {
      throw new Error('Erro ao buscar tarefas');
    }
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar tarefas:', error);
    throw error;
  }
};

// Função para adicionar uma nova tarefa
export const insertTask = async (newTask) => {
  try {
    const response = await fetch(`${API_BASE_URL}/insert-tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([newTask]),
    });
    if (!response.ok) {
      throw new Error('Erro ao adicionar tarefa');
    }
    return await response.json();
  } catch (error) {
    console.error('Erro ao adicionar tarefa:', error);
    throw error;
  }
};
