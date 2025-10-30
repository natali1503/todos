export enum StatusTask {
  active = 'active',
  completed = 'completed',
}

export const FilterTasks = {
  all: 'All',
  completed: 'Completed',
  active: 'Active',
} as const;

export type FilterTasksType = (typeof FilterTasks)[keyof typeof FilterTasks];

export const FilterTasksRuName = {
  [FilterTasks.all]: 'Все',
  [FilterTasks.completed]: 'Выполненные',
  [FilterTasks.active]: 'Активные',
};

export interface ITask {
  idTask: string;
  task: string;
  status: StatusTask;
}

export type IdTaskType = ITask['idTask'];
