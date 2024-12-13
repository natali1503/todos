import { createAsyncThunk } from '@reduxjs/toolkit';
import { defaultTask, ITask, ITasksState, StatusTask } from '../stor/taskSlice';
import { loadFromLocalStorage } from './loadFromLocalStorage';
import { saveToLocalStorage } from './saveToLocalStorage';

export const loadToLocalStorageRedux = createAsyncThunk<ITasksState>('task/loadToLocalStorage', async () => {
  try {
    const dataFromLocalStorage: ITasksState | null = loadFromLocalStorage('todos');
    return dataFromLocalStorage || defaultTask;
  } catch (error) {
    console.error('Failed to load data from localStorage:', error);
    return defaultTask;
  }
});

export const selectActiveTasksRedux = createAsyncThunk<ITasksState>('task/selectActiveTasks', async () => {
  try {
    const dataFromLocalStorage: ITasksState | null = loadFromLocalStorage('todos');
    if (dataFromLocalStorage) {
      const temp = {
        ...dataFromLocalStorage,
        data: dataFromLocalStorage.data.filter((taskItem) => taskItem.status === StatusTask.active),
      };
      return temp;
    } else return defaultTask;
  } catch (error) {
    console.error('Failed to load data from localStorage:', error);
    return defaultTask;
  }
});

export const selectCopmletedTasksRedux = createAsyncThunk<ITasksState>('task/selectCopmletedTasks', async () => {
  try {
    const dataFromLocalStorage: ITasksState | null = loadFromLocalStorage('todos');
    if (dataFromLocalStorage) {
      const temp = {
        ...dataFromLocalStorage,
        data: dataFromLocalStorage.data.filter((taskItem) => taskItem.status === StatusTask.completed),
      };
      return temp;
    } else return defaultTask;
  } catch (error) {
    console.error('Failed to load data from localStorage:', error);
    return defaultTask;
  }
});
export const clearCompletedTasksRedux = createAsyncThunk<ITasksState>('task/clearCompleted', async () => {
  try {
    const dataFromLocalStorage: ITasksState | null = loadFromLocalStorage('todos');
    if (dataFromLocalStorage) {
      const temp = {
        ...dataFromLocalStorage,
        data: dataFromLocalStorage.data.filter((taskItem) => taskItem.status === StatusTask.active),
      };
      saveToLocalStorage('todos', temp);
      return temp;
    } else return defaultTask;
  } catch (error) {
    console.error('Failed to load data from localStorage:', error);
    return defaultTask;
  }
});

export const saveToLocalStoragesRedux = createAsyncThunk('task/saveToLocalStorage', async (taskText: string) => {
  try {
    const dataFromLocalStorage: ITasksState | null = loadFromLocalStorage('todos');
    if (dataFromLocalStorage) {
      const newTask: ITask = {
        idTask: dataFromLocalStorage.data.length + 1,
        task: taskText,
        status: StatusTask.active,
      };
      const updatedTasks = [...dataFromLocalStorage.data, newTask];
      const temp = {
        ...dataFromLocalStorage,
        data: updatedTasks,
      };
      saveToLocalStorage('todos', temp);
      return temp;
    } else return defaultTask;
  } catch (error) {
    console.error('Failed to load data from localStorage:', error);
    return defaultTask;
  }
});
export const changeTaskStatusRedux = createAsyncThunk('task/changeTaskStatus', async (id: number) => {
  try {
    const dataFromLocalStorage: ITasksState | null = loadFromLocalStorage('todos');
    if (dataFromLocalStorage) {
      const temp = {
        ...dataFromLocalStorage,
        data: dataFromLocalStorage.data.map((taskItem) => {
          if (taskItem.idTask === id) {
            const currentStatus = taskItem.status;
            taskItem.status = currentStatus === StatusTask.active ? StatusTask.completed : StatusTask.active;
          }
          return taskItem;
        }),
      };
      saveToLocalStorage('todos', temp);
      return temp;
    } else return defaultTask;
  } catch (error) {
    console.error('Failed to load data from localStorage:', error);
    return defaultTask;
  }
});
