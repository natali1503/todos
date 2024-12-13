import { configureStore } from '@reduxjs/toolkit';
import taskSlice from './taskSlice';

import { init } from '../init';

export const store = configureStore({
  reducer: {
    tasks: taskSlice,
  },
  preloadedState: init(),
});

export type RootState = ReturnType<typeof store.getState>;
export type TasksDispatch = typeof store.dispatch;
