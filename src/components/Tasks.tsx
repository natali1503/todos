import React from 'react';

import { ITask } from '../general/tasks/ITask';
import { Box, Typography } from '@mui/material';
import { TaskList } from './TaskList';

interface ITasksProps {
  taskList: ITask[];
  filter: string;
}
export const Tasks: React.FC<ITasksProps> = ({ taskList, filter }) => {
  const isTask = taskList.length === 0;

  return (
    <Box>
      {isTask && (
        <Box
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          sx={{ paddingLeft: '15px', minHeight: '40px' }}
        >
          <Typography> {`No ${filter.toLowerCase()} tasks`}</Typography>
        </Box>
      )}
      {!isTask && <TaskList taskList={taskList} />}
    </Box>
  );
};
