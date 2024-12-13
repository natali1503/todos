import { loadFromLocalStorage } from './localStorage/loadFromLocalStorage';
import { saveToLocalStorage } from './localStorage/saveToLocalStorage';
import { ITasksState, StatusTask } from './stor/taskSlice';

export const mockData: ITasksState = {
  data: [
    { idTask: 1, task: 'Деплой', status: StatusTask.completed },
    { idTask: 2, task: 'Дописать приложение', status: StatusTask.active },
    { idTask: 3, task: 'Написать тесты', status: StatusTask.active },
  ],
};
export const init = () => {
  if (loadFromLocalStorage('todos')) return;
  saveToLocalStorage('todos', mockData);
};
