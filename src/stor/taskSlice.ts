import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadFromLocalStorage } from '../localStorage/loadFromLocalStorage';
import {
  loadToLocalStorageRedux,
  selectActiveTasksRedux,
  selectCopmletedTasksRedux,
  clearCompletedTasksRedux,
  changeTaskStatusRedux,
  saveToLocalStoragesRedux,
} from '../localStorage/localStorageRedux';

export enum StatusTask {
  active = 'active',
  completed = 'completed',
}
export enum FilterTasks {
  all = 'All',
  completed = 'Completed',
  active = 'Active',
}
export interface ITask {
  idTask: string;
  task: string;
  status: StatusTask;
}
export type IdTaskType = ITask['idTask'];
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
  data: loadFromLocalStorage<ITasksState>('todos')?.data || defaultTask.data,
  filter: FilterTasks.all,
};
const taskSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeFilter: (state, actions: PayloadAction<FilterTasks>) => {
      if (!state) return;
      state.filter = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadToLocalStorageRedux.fulfilled, (state, action) => {
      state.data = action.payload.data;
    });
    builder.addCase(selectActiveTasksRedux.fulfilled, (state, action) => {
      state.data = action.payload.data;
    });
    builder.addCase(selectCopmletedTasksRedux.fulfilled, (state, action) => {
      state.data = action.payload.data;
    });
    builder.addCase(clearCompletedTasksRedux.fulfilled, (state, action) => {
      if (state.filter === FilterTasks.all) state.data = action.payload.data;
      else if (state.filter === FilterTasks.active) {
        const filter = action.payload.data.filter((taskItem) => taskItem.status === StatusTask.active);
        state.data = filter;
      } else if (state.filter === FilterTasks.completed) {
        const filter = action.payload.data.filter((taskItem) => taskItem.status === StatusTask.completed);
        state.data = filter;
      }
    });
    builder.addCase(changeTaskStatusRedux.fulfilled, (state, action) => {
      if (state.filter === FilterTasks.all) state.data = action.payload.data;
      else if (state.filter === FilterTasks.active) {
        const filter = action.payload.data.filter((taskItem) => taskItem.status === StatusTask.active);
        state.data = filter;
      } else if (state.filter === FilterTasks.completed) {
        const filter = action.payload.data.filter((taskItem) => taskItem.status === StatusTask.completed);
        state.data = filter;
      }
    });
    builder.addCase(saveToLocalStoragesRedux.fulfilled, (state, action) => {
      if (state.filter === FilterTasks.all) state.data = action.payload.data;
      else if (state.filter === FilterTasks.active) {
        const filter = action.payload.data.filter((taskItem) => taskItem.status === StatusTask.active);
        state.data = filter;
      } else if (state.filter === FilterTasks.completed) {
        const filter = action.payload.data.filter((taskItem) => taskItem.status === StatusTask.completed);
        state.data = filter;
      }
    });
  },
});
export const { changeFilter } = taskSlice.actions;
export default taskSlice.reducer;
