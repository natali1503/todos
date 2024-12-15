import { RootState } from './taskStore';
import { ITasksState } from './taskSlice';
import { StatusTask } from '../general/tasks/StatusTask';
import { loadFromLocalStorage } from '../localStorage/loadFromLocalStorage';
import { keyForLocalStorage } from '../general/constants/keyForLocalStorage';

export const selectTasks = (state: RootState) => state.tasks.data;
export const selectFilter = (state: RootState) => state.tasks.filter;

export const ActiveTasks = () => {
  const dataFromLocalStorage = loadFromLocalStorage<ITasksState>(keyForLocalStorage.todos);
  if (!dataFromLocalStorage) return 0;
  const tasks = dataFromLocalStorage.data;
  return tasks.filter((taskItem) => taskItem.status === StatusTask.active).length;
};
