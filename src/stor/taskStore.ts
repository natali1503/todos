import { configureStore } from '@reduxjs/toolkit';
import taskSlice from './taskSlice';

import { initializeTasks } from '../init';

export const store = configureStore({
  reducer: {
    tasks: taskSlice,
  },
});
store.dispatch(initializeTasks());
export type RootState = ReturnType<typeof store.getState>;
export type TasksDispatch = typeof store.dispatch;
