import { useSelector } from 'react-redux';

import { RootState } from './taskStore';
import { StatusTask } from './taskSlice';

export const selectTasks = (state: RootState) => state.tasks.data;
export const selectFilter = (state: RootState) => state.tasks.filter;

export const ActiveTasks = () => {
  const task = useSelector((state: RootState) => state.tasks.data);
  if (!task) return 0;
  return task.filter((taskItem) => taskItem.status === StatusTask.active).length;
};
