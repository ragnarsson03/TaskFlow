import { useDispatch } from 'react-redux';
import type { Task } from '../store/tasks';
import { toggleTask, deleteTask } from '../store/slices/tasksSlice';
import { toast } from 'react-toastify';

interface TaskItemProps {
  task: Task;
}

const TaskItem = ({ task }: TaskItemProps) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
    toast.info(`🎉 ¡Tarea "${task.text}" actualizada!`);
  };

  const handleDelete = () => {
    if (task.id === 4) {
      toast.error('🚫 ¡No puedes eliminar esta tarea sagrada!');
    } else {
      dispatch(deleteTask(task.id));
      toast.success(`🗑️ ¡Tarea "${task.text}" eliminada!`);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
        style={{ marginRight: '10px' }}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={handleDelete} style={{ marginLeft: 'auto' }}>
        Eliminar
      </button>
    </div>
  );
};

export default TaskItem;