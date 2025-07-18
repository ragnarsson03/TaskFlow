import { useSelector } from 'react-redux';
import type { RootState } from '../store/store.ts';
import TaskItem from './TaskItem.tsx';

const TaskList = () => {
  const tasks = useSelector((state: RootState) => state.tasks);

  return (
    <div>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;