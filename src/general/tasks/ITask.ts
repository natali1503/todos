import { StatusTask } from './StatusTask';

export interface ITask {
  idTask: string;
  task: string;
  status: StatusTask;
}

export type IdTaskType = ITask['idTask'];
