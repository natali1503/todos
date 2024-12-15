import { ITasksState } from './store/taskSlice';
import { loadFromLocalStorage } from './general/localStorage/loadFromLocalStorage';
import { keyForLocalStorage } from './general/constants/keyForLocalStorage';

import { saveToLocalStorage } from './general/localStorage/saveToLocalStorage';
import { ITask } from './general/tasks/ITask';
import { newTask } from './general/tasks/newTask';

export const dataInitial: { data: Pick<ITask, 'task'>[] } = {
  data: [{ task: 'Деплой' }, { task: 'Дописать приложение' }, { task: 'Написать тесты' }],
};

export function init(isInitialData: boolean = true): ITask[] | [] {
  const dataFromLocalStorage = loadFromLocalStorage<ITasksState>(keyForLocalStorage.todos);

  if (!dataFromLocalStorage) {
    if (isInitialData) {
      const temp: ITask[] = dataInitial.data.map((task) => newTask(task.task));
      saveToLocalStorage(keyForLocalStorage.todos, { data: temp });
      return temp;
    }
    return [];
  }

  return dataFromLocalStorage.data || [];
}
