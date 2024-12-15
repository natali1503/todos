import { FilterTasks } from './FilterTasks';
import { StatusTask } from './StatusTask';

export const statusByFilter: { [key in FilterTasks]: StatusTask[] } = {
  [FilterTasks.all]: [StatusTask.active, StatusTask.completed],
  [FilterTasks.completed]: [StatusTask.completed],
  [FilterTasks.active]: [StatusTask.active],
};
