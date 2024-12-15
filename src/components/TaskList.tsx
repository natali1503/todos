import { TransitionGroup } from 'react-transition-group';
import { Box, Collapse } from '@mui/material';
import { useSelector } from 'react-redux';
import React from 'react';
import { useDispatch } from 'react-redux';

import { changeFilter, changeStatusTask, removeTask } from '../store/taskSlice';
import { TaskItem } from './elements/TaskItem';
import { TasksDispatch } from '../store/taskStore';
import { ITask } from '../general/tasks/ITask';
import { StatusTask } from '../general/tasks/StatusTask';
import { selectFilter } from '../store/selectors';
interface ITaskListProps {
  taskList: ITask[];
}

export const TaskList: React.FC<ITaskListProps> = ({ taskList }) => {
  const dispatch = useDispatch<TasksDispatch>();
  const filter = useSelector(selectFilter);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <TransitionGroup>
        {taskList.map((taskItem) => (
          <Collapse key={taskItem.idTask}>
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
          </Collapse>
        ))}
      </TransitionGroup>
    </Box>
  );
};
