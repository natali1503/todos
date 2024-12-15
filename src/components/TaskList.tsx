import { Box } from '@mui/material';

import { TaskItem } from './elements/TaskItem';
import { useDispatch } from 'react-redux';
import { TasksDispatch } from '../store/taskStore';
import React from 'react';
import { ITask } from '../general/tasks/ITask';
import { StatusTask } from '../general/tasks/StatusTask';
import { changeFilter, changeStatusTask, removeTask } from '../store/taskSlice';
import { useSelector } from 'react-redux';
import { selectFilter } from '../store/selectors';
interface ITaskListProps {
  taskList: ITask[];
}

export const TaskList: React.FC<ITaskListProps> = ({ taskList }) => {
  const dispatch = useDispatch<TasksDispatch>();
  const filter = useSelector(selectFilter);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {taskList.map((taskItem) => (
        <TaskItem
          text={taskItem.task}
          key={taskItem.idTask}
          id={taskItem.idTask}
          checked={taskItem.status === StatusTask.completed ? true : false}
          onChange={(id) => {
            dispatch(changeStatusTask(id));
            dispatch(changeFilter(filter));
          }}
          removeTask={(id) => {
            dispatch(removeTask(id));
            dispatch(changeFilter(filter));
          }}
        />
      ))}
    </Box>
  );
};
