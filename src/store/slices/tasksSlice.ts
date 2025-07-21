import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { initialTasks } from '../tasks';
import type { Task } from '../tasks';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialTasks,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.push(action.payload);
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      const idToDelete = action.payload;
      return state.filter(task => task.id !== idToDelete);
    },
  },
});

export const { addTask, toggleTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
