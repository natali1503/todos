import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ITask, FilterTasks, FilterTasksType, StatusTask } from '../types/task';
import { init } from '../init';
import { newTask } from '../models/task';

export interface ITasksState {
  data: ITask[];
}

export const defaultTask: ITasksState = {
  data: [],
};

interface IInitialState extends ITasksState {
  filter: FilterTasksType;
}

const initialState: IInitialState = {
  data: init(),
  filter: FilterTasks.all,
};
const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<FilterTasksType>) => {
      state.filter = action.payload;
    },
    addTask: (state, action: PayloadAction<string>) => {
      const task: ITask = newTask(action.payload);
      state.data.push(task);
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter((taskItem) => taskItem.idTask !== action.payload);
    },
    changeStatusTask: (state, action: PayloadAction<string>) => {
      const task = state.data.find((taskItem) => taskItem.idTask === action.payload);
      if (task) {
        task.status = task.status === StatusTask.active ? StatusTask.completed : StatusTask.active;
      }
    },
    clearCompleted: (state) => {
      state.data = state.data.filter((taskItem) => taskItem.status === StatusTask.active);
    },
    changeTextTask: (state, action: PayloadAction<{ id: string; text: string }>) => {
      const task = state.data.find((taskItem) => taskItem.idTask === action.payload.id);
      if (task) {
        task.task = action.payload.text;
      }
    },
  },
});
export const { changeFilter, addTask, changeStatusTask, clearCompleted, removeTask, changeTextTask } =
  taskSlice.actions;
export default taskSlice.reducer;
