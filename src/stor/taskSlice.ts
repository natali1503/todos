import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TStatusTask = 'completed' | 'active';

export const StatusTask = {
  completed: 'completed' as const,
  active: 'active' as const,
};

export interface ITask {
  idTask: number;
  task: string;
  status: TStatusTask;
}

export interface IInitialState {
  data: ITask[];
}

const initialState: IInitialState = {
  data: [
    { idTask: 1, task: 'Диплой', status: 'active' },
    { idTask: 2, task: 'Дописать приложение', status: 'active' },
    { idTask: 3, task: 'Написать тесты', status: 'active' },
  ],
};

const taskSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeTaskStatus: (state, actions: PayloadAction<string>) => {
      console.log(actions.payload);
      // {
      //         ...state,
      //         data: prevState.data.map((taskItem) =>
      //           taskItem.idTask === id
      //             ? { ...taskItem, status: taskItem.status === StatusTask.active ? StatusTask.completed : StatusTask.active }
      //             : taskItem
      //         ),
      //       }
    },
    addTask: (state, actions: PayloadAction<ITask>) => {
      state.data.push(actions.payload);
    },
  },
});

// export const { increment, decrement } = taskSlice.actions;
export default taskSlice.reducer;
