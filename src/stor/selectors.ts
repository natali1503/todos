import { loadFromLocalStorage } from '../localStorage/loadFromLocalStorage';
import { RootState } from '../stor/taskStore';
import { ITasksState, StatusTask } from './taskSlice';

export const selectTasks = (state: RootState) => state.tasks.data;

export const activeTasks = () => {
  const task = loadFromLocalStorage<ITasksState>('todos');
  if (!task) return 0;
  return task.data.filter((taskItem) => taskItem.status === StatusTask.active).length;
};
