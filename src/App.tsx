import './App.css';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <AddTaskForm />
      <TaskList />
    </div>
  );
}

export default App
