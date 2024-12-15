import { ITasksState } from './store/taskSlice';
import { loadFromLocalStorage } from './localStorage/loadFromLocalStorage';
import { keyForLocalStorage } from './general/constants/keyForLocalStorage';

import { saveToLocalStorage } from './localStorage/saveToLocalStorage';
import { StatusTask } from './general/tasks/StatusTask';
import { ITask } from './general/tasks/ITask';

export const dataInitial: { data: Pick<ITask, 'task'>[] } = {
  data: [{ task: 'Деплой' }, { task: 'Дописать приложение' }, { task: 'Написать тесты' }],
};

export function init(isInitialData: boolean = true): ITask[] | [] {
  const dataFromLocalStorage = loadFromLocalStorage<ITasksState>(keyForLocalStorage.todos);

  if (!dataFromLocalStorage) {
    if (isInitialData) {
      const temp: ITask[] = dataInitial.data.map((task) => ({
        idTask: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
        task: task.task,
        status: StatusTask.active,
      }));
      saveToLocalStorage(keyForLocalStorage.todos, { data: temp });
      return temp;
    }
    return [];
  }

  return dataFromLocalStorage.data || [];
}
