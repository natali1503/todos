import { Box } from '@mui/material';

import { TaskItem } from './elements/TaskItem';
import { useDispatch } from 'react-redux';
import { changeTaskStatusRedux } from '../localStorage/localStorageRedux';
import { TasksDispatch } from '../store/taskStore';
import React from 'react';
import { ITask } from '../general/tasks/ITask';
import { StatusTask } from '../general/tasks/StatusTask';
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
