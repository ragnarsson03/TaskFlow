import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './slices/chatSlice';

// Configura el store con el reducer de chat
export const store = configureStore({
  reducer: {
    chat: chatReducer,
  },
});

// Exporta el tipo RootState para usar en useSelector con tipado
export type RootState = ReturnType<typeof store.getState>;

// Exporta AppDispatch para usar en dispatch con tipado
export type AppDispatch = typeof store.dispatch;
