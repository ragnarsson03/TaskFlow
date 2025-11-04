export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export const initialTasks: Task[] = [
 
  { id: 1, text: 'Construir una app de tareas', completed: false },
];