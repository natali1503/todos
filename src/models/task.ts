import { ITask, StatusTask } from '../types/task';

export function newTask(textTask: string): ITask {
  return {
    idTask: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
    task: textTask,
    status: StatusTask.active,
  };
}
