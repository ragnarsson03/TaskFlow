import { useDispatch } from 'react-redux';
import type { Task } from '../store/tasks';
import { toggleTask, deleteTask } from '../store/slices/tasksSlice';

interface TaskItemProps {
  task: Task;
}

const TaskItem = ({ task }: TaskItemProps) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
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