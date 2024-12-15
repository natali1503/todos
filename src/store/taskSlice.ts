import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadFromLocalStorage } from '../general/localStorage/loadFromLocalStorage';
import { keyForLocalStorage } from '../general/constants/keyForLocalStorage';
import { ITask } from '../general/tasks/ITask';
import { FilterTasks } from '../general/tasks/FilterTasks';
import { StatusTask } from '../general/tasks/StatusTask';
import { init } from '../init';
import { newTask } from '../general/tasks/newTask';
import { filteredTasks } from '../general/tasks/filteringTasks';

export interface ITasksState {
  data: ITask[];
}

export const defaultTask: ITasksState = {
  data: [],
};

interface IInitialState extends ITasksState {
  filter: FilterTasks;
}

const initialState: IInitialState = {
  data: init(),
  filter: FilterTasks.all,
};
const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    changeFilter: (state, actions) => {
      if (!state) return;
      const dataFromLocalStorage = loadFromLocalStorage<ITasksState>(keyForLocalStorage.todos);
      if (!dataFromLocalStorage) state.data = defaultTask.data;
      else {
        if (actions.payload === FilterTasks.all) state.data = dataFromLocalStorage.data;
        else state.data = filteredTasks(dataFromLocalStorage.data, actions.payload);
        state.filter = actions.payload;
      }
    },
    addTask: (state, action: PayloadAction<string>) => {
      const dataFromLocalStorage = loadFromLocalStorage<ITasksState>(keyForLocalStorage.todos);
      if (!dataFromLocalStorage) state.data = defaultTask.data;
      else {
        const task: ITask = newTask(action.payload);
        const temp = [...dataFromLocalStorage.data, task];
        state.data = temp;
      }
    },
    changeStatusTask: (state, action: PayloadAction<string>) => {
      const dataFromLocalStorage = loadFromLocalStorage<ITasksState>(keyForLocalStorage.todos);
      if (!dataFromLocalStorage?.data) state.data = defaultTask.data;
      else {
        const temp = dataFromLocalStorage.data.map((taskItem) => {
          if (taskItem.idTask === action.payload) {
            const currentStatus = taskItem.status;
            taskItem.status = currentStatus === StatusTask.active ? StatusTask.completed : StatusTask.active;
          }
          return taskItem;
        });
        state.data = temp;
      }
    },
    clearCompleted: (state) => {
      const dataFromLocalStorage = loadFromLocalStorage<ITasksState>(keyForLocalStorage.todos);
      if (!dataFromLocalStorage) state.data = defaultTask.data;
      else {
        const temp: ITask[] = dataFromLocalStorage.data.filter((taskItem) => taskItem.status === StatusTask.active);
        state.data = temp;
      }
    },
  },
});
export const { changeFilter, addTask, changeStatusTask, clearCompleted } = taskSlice.actions;
export default taskSlice.reducer;
