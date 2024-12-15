import { ITask } from './ITask';
import { FilterTasks } from './FilterTasks';
import { statusByFilter } from './statusByFilter';

export function filteredTasks(tasks: ITask[], filter: FilterTasks): ITask[] {
  const taskStatusesByFilter = statusByFilter[filter];
  const filteredTasks = tasks.filter((task) => taskStatusesByFilter.includes(task.status));

  return filteredTasks;
}
