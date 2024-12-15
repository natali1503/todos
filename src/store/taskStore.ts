import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';
import { saveToLocalStorage } from '../general/localStorage/saveToLocalStorage';
import { keyForLocalStorage } from '../general/constants/keyForLocalStorage';

export const rootReducer = {
  tasks: taskReducer,
};
export type RootState = ReturnType<typeof store.getState>;
export type TasksDispatch = typeof store.dispatch;
const permittedOperations = ['tasks/addTask', 'tasks/changeStatusTask', 'tasks/clearCompleted', 'tasks/removeTask'];
//@ts-expect-error: for deploy
export const saveTodosMiddleware = (storeAPI) => (next) => (action) => {
  const result = next(action);
  const state = storeAPI.getState();
  if (permittedOperations.includes(action.type))
    saveToLocalStorage(keyForLocalStorage.todos, { data: state.tasks.data });

  return result;
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saveTodosMiddleware),
});
