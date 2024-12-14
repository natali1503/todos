import { createAsyncThunk } from '@reduxjs/toolkit';
import { defaultTask, IdTaskType, ITask, ITasksState, StatusTask } from '../stor/taskSlice';
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
    const newTask: ITask = {
      idTask: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      task: taskText,
      status: StatusTask.active,
    };
    if (dataFromLocalStorage) {
      const updatedTasks = [...dataFromLocalStorage.data, newTask];
      const temp = {
        ...dataFromLocalStorage,
        data: updatedTasks,
      };
      saveToLocalStorage('todos', temp);
      return temp;
    } else {
      const temp = {
        data: [newTask],
      };
      saveToLocalStorage('todos', temp);
      return temp;
    }
  } catch (error) {
    console.error('Failed to load data from localStorage:', error);
    return defaultTask;
  }
});
export const changeTaskStatusRedux = createAsyncThunk('task/changeTaskStatus', async (id: IdTaskType) => {
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
