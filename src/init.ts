import { ITasksState } from './store/taskSlice';
import { storage, STORAGE_KEYS } from './utils/storage';
import { ITask } from './types/task';
import { newTask } from './models/task';

export const dataInitial: { data: Pick<ITask, 'task'>[] } = {
  data: [{ task: 'Убраться на столе' }, { task: 'Запланировать встречу' }, { task: 'Отправить отчёт по работе' }],
};

export function init(isInitialData: boolean = true): ITask[] | [] {
  const dataFromLocalStorage = storage.load<ITasksState>(STORAGE_KEYS.todos);

  if (!dataFromLocalStorage) {
    if (isInitialData) {
      const temp: ITask[] = dataInitial.data.map((task) => newTask(task.task));
      storage.save(STORAGE_KEYS.todos, { data: temp });
      return temp;
    }
    return [];
  }

  return dataFromLocalStorage.data || [];
}
