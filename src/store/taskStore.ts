import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';
import { saveToLocalStorage } from '../localStorage/saveToLocalStorage';
import { keyForLocalStorage } from '../general/constants/keyForLocalStorage';

export const rootReducer = {
  tasks: taskReducer,
};
export type RootState = ReturnType<typeof store.getState>;
export type TasksDispatch = typeof store.dispatch;

export const saveTodosMiddleware = (storeAPI) => (next) => (action) => {
  const result = next(action);
  const state = storeAPI.getState();
  if (action.type !== 'tasks/changeFilter') saveToLocalStorage(keyForLocalStorage.todos, { data: state.tasks.data });

  return result;
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saveTodosMiddleware),
});
