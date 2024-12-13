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

export interface ITask {
  idTask: number;
  task: string;
  status: StatusTask;
}

export interface ITasksState {
  data: ITask[];
}

export const defaultState: ITasksState = {
  data: [],
};

const initialState: ITasksState = loadFromLocalStorage<ITasksState>('todos') || defaultState;
const taskSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeTaskStatus: (state, actions: PayloadAction<number>) => {
      if (!state) return;
      const temp = [
        ...state.data.map((taskItem) =>
          taskItem.idTask === actions.payload
            ? { ...taskItem, status: taskItem.status === StatusTask.active ? StatusTask.completed : StatusTask.active }
            : taskItem
        ),
      ];
      state.data = temp;
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
      state.data = action.payload.data;
    });
    builder.addCase(changeTaskStatusRedux.fulfilled, (state, action) => {
      state.data = action.payload.data;
    });
    builder.addCase(saveToLocalStoragesRedux.fulfilled, (state, action) => {
      state.data = action.payload.data;
    });
  },
});

export default taskSlice.reducer;
