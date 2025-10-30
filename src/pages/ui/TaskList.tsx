import { TransitionGroup } from 'react-transition-group';
import { Box, Collapse } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';

import { ITask, StatusTask } from '../../types/task';
import { TasksDispatch } from '../../store/taskStore';
import { TaskItem } from '../../components/elements/TaskItem';
import { changeStatusTask, removeTask } from '../../store/taskSlice';

interface ITaskListProps {
  taskList: ITask[];
}

export const TaskList: React.FC<ITaskListProps> = ({ taskList }) => {
  const dispatch = useDispatch<TasksDispatch>();
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
              }}
              removeTask={(id) => {
                dispatch(removeTask(id));
              }}
            />
          </Collapse>
        ))}
      </TransitionGroup>
    </Box>
  );
};
