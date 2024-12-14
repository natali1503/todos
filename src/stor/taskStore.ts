import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';

import { initializeTasks } from '../init';

export const rootReducer = {
  tasks: taskReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});
store.dispatch(initializeTasks());
export type RootState = ReturnType<typeof store.getState>;
export type TasksDispatch = typeof store.dispatch;
