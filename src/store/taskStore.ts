import { configureStore, Middleware } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';
import { storage, STORAGE_KEYS } from '../utils/storage';

export const rootReducer = {
  tasks: taskReducer,
};

const permittedOperations = [
  'tasks/addTask',
  'tasks/changeStatusTask',
  'tasks/clearCompleted',
  'tasks/removeTask',
  'tasks/changeTextTask',
];

export const saveTodosMiddleware: Middleware = (storeAPI) => (next) => (action) => {
  const result = next(action);
  const state = storeAPI.getState() as RootState;
  if (permittedOperations.includes((action as { type: string }).type)) {
    storage.save(STORAGE_KEYS.todos, { data: state.tasks.data });
  }

  return result;
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saveTodosMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type TasksDispatch = typeof store.dispatch;
