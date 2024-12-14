import { Box } from '@mui/material';
import { ITask, StatusTask } from '../stor/taskSlice';
import { TaskItem } from './elements/TaskItem';
import { useDispatch } from 'react-redux';
import { changeTaskStatusRedux } from '../localStorage/localStorageRedux';
import { TasksDispatch } from '../stor/taskStore';
import React from 'react';
interface ITaskListProps {
  taskList: ITask[];
}

export const TaskList: React.FC<ITaskListProps> = ({ taskList }) => {
  const dispatch = useDispatch<TasksDispatch>();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {taskList.map((taskItem) => (
        <TaskItem
          text={taskItem.task}
          key={taskItem.idTask}
          id={taskItem.idTask}
          checked={taskItem.status === StatusTask.completed ? true : false}
          onChange={(id) => {
            dispatch(changeTaskStatusRedux(id));
          }}
        />
      ))}
    </Box>
  );
};
