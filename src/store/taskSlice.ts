import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadFromLocalStorage } from '../localStorage/loadFromLocalStorage';
import { keyForLocalStorage } from '../general/constants/keyForLocalStorage';
import { ITask } from '../general/tasks/ITask';
import { FilterTasks } from '../general/tasks/FilterTasks';
import { StatusTask } from '../general/tasks/StatusTask';
import { init } from '../init';

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
    changeFilter: (state, actions: PayloadAction<FilterTasks>) => {
      if (!state) return;
      const dataFromLocalStorage = loadFromLocalStorage<ITasksState>(keyForLocalStorage.todos);
      if (!dataFromLocalStorage) state.data = defaultTask.data;
      else {
        let temp: ITask[] = [];
        if (actions.payload === FilterTasks.active) {
          temp = dataFromLocalStorage.data.filter((taskItem) => taskItem.status === StatusTask.active);
        } else if (actions.payload === FilterTasks.completed) {
          temp = dataFromLocalStorage.data.filter((taskItem) => taskItem.status === StatusTask.completed);
        } else temp = dataFromLocalStorage.data;
        state.data = temp;
        state.filter = actions.payload;
      }
    },
    addTask: (state, action: PayloadAction<string>) => {
      const newTask: ITask = {
        idTask: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
        task: action.payload,
        status: StatusTask.active,
      };
      state.data.push(newTask);
    },
    changeStatusTask: (state, action: PayloadAction<string>) => {
      state.data = state.data.map((taskItem) => {
        if (taskItem.idTask === action.payload) {
          const currentStatus = taskItem.status;
          taskItem.status = currentStatus === StatusTask.active ? StatusTask.completed : StatusTask.active;
        }
        return taskItem;
      });
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
