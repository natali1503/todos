import { createAsyncThunk } from '@reduxjs/toolkit';

import { ITasksState, StatusTask } from './stor/taskSlice';
import { saveToLocalStoragesRedux } from './localStorage/localStorageRedux';
import { loadFromLocalStorage } from './localStorage/loadFromLocalStorage';

export const initializeTasks = createAsyncThunk<void, void, { state: { tasks: ITasksState } }>(
  'tasks/initialize',
  async (_, { getState, dispatch }) => {
    if (loadFromLocalStorage('todos')) return;

    mockData.data.forEach((task) => {
      dispatch(saveToLocalStoragesRedux(task.task));
    });
  }
);

export const mockData: ITasksState = {
  data: [
    { idTask: '1', task: 'Деплой', status: StatusTask.completed },
    { idTask: '2', task: 'Дописать приложение', status: StatusTask.active },
    { idTask: '3', task: 'Написать тесты', status: StatusTask.active },
  ],
};
