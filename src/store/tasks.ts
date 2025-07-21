export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export const initialTasks: Task[] = [
  { id: 1, text: 'Aprender React', completed: true },
  { id: 2, text: 'Aprender Redux', completed: false },
  { id: 3, text: 'Construir una app de tareas', completed: false },
  { id: 4, text: 'Alai es Pato', completed: false },
];