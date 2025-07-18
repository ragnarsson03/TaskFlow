import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/slices/tasksSlice';
import type { Task } from '../store/tasks';

const AddTaskForm = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskText.trim() === '') return;

    const newTask: Task = {
      id: Date.now(), // Simple unique ID
      text: taskText,
      completed: false,
    };

    dispatch(addTask(newTask));
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Añadir nueva tarea"
        style={{ marginRight: '10px', padding: '8px' }}
      />
      <button type="submit" style={{ padding: '8px 15px' }}>
        Añadir Tarea
      </button>
    </form>
  );
};

export default AddTaskForm;