import { createAsyncThunk } from '@reduxjs/toolkit';

import { ITask, ITasksState } from './stor/taskSlice';
import { saveToLocalStoragesRedux } from './localStorage/localStorageRedux';
import { loadFromLocalStorage } from './localStorage/loadFromLocalStorage';
import { keyForLocalStorage } from './general/constants/keyForLocalStorage';

export const initializeTasks = createAsyncThunk<void, void, { state: { tasks: ITasksState } }>(
  'tasks/initialize',
  async (_, { getState, dispatch }) => {
    if (loadFromLocalStorage(keyForLocalStorage.todos)) return;

    dataInitial.data.forEach((task) => {
      dispatch(saveToLocalStoragesRedux(task.task));
    });
  }
);
export const dataInitial: { data: Pick<ITask, 'task'>[] } = {
  data: [{ task: 'Деплой' }, { task: 'Дописать приложение' }, { task: 'Написать тесты' }],
};
