# Task Manager Frontend

Este é o frontend de uma aplicação de gerenciamento de tarefas construída com React e Vite.

## Funcionalidades

- **Adicionar Tarefas**: Formulário para adicionar novas tarefas.
- **Listar Tarefas**: Exibe uma lista de tarefas com seu status (A Fazer, Em Progresso, Concluído).

## Tecnologias Utilizadas

- React
- Vite
- CSS Modules
- PropTypes

## Estrutura do Projeto

```
/src
  /assets                 # Imagens e ícones
    logo-clinicorp-solutions.svg
  /components             # Todos os componentes
    /TaskForm
      TaskForm.jsx
      TaskForm.module.css
    /TaskList
      TaskList.jsx
      TaskList.module.css
  /services               # Camada de serviços
    taskService.js
  App.jsx                 # Componente principal
  index.css               # Estilos globais
  main.jsx                # Ponto de entrada
```

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/iago1422/task-manager-backend.git
   cd task-manager-frontend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Rode o projeto:

   ```bash
   npm run dev
   ```

4. Acesse a aplicação no navegador em `http://localhost:5173/`.

## Comandos

- `npm run dev`: Roda o servidor de desenvolvimento.
- `npm run build`: Cria o build para produção.
- `npm run lint`: Executa o ESLint para verificar problemas no código.

## Boas Práticas Implementadas

- **Componentização**: Os componentes são divididos e organizados em pastas, cada um com seu próprio estilo (CSS modular).
- **PropTypes**: Validação de tipos nas props dos componentes.
- **Serviços**: Todas as requisições à API são centralizadas na camada de serviços.
- **Hooks Customizados**: Uso de hooks customizados para reutilizar a lógica de busca de dados.
