import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';

export const rootReducer = {
  tasks: taskReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type TasksDispatch = typeof store.dispatch;
