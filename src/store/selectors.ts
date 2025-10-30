import { RootState } from './taskStore';
import { StatusTask, FilterTasks } from '../types/task';

// Селектор для всех задач
export const selectAllTasks = (state: RootState) => state.tasks.data;

// Селектор для текущего фильтра
export const selectFilter = (state: RootState) => state.tasks.filter;

// Селектор для проверки наличия выполненных задач (возвращает boolean, не создает новый массив)
export const hasCompletedTasks = (state: RootState) =>
  state.tasks.data.some((task) => task.status === StatusTask.completed);

// Селектор для отфильтрованных задач (вычисляемый на лету)
export const selectFilteredTasks = (state: RootState) => {
  const allTasks = state.tasks.data;
  const filter = state.tasks.filter;

  switch (filter) {
    case FilterTasks.active:
      return allTasks.filter((task) => task.status === StatusTask.active);
    case FilterTasks.completed:
      return allTasks.filter((task) => task.status === StatusTask.completed);
    case FilterTasks.all:
    default:
      return allTasks;
  }
};

// Селектор для количества активных задач
export const selectActiveTasksCount = (state: RootState) => {
  return state.tasks.data.filter((task) => task.status === StatusTask.active).length;
};
