import React from 'react';

import { ITask } from '../../types/task';
import { Box, Typography } from '@mui/material';
import { TaskList } from './TaskList';

interface ITasksProps {
  taskList: ITask[];
}
export const Tasks: React.FC<ITasksProps> = ({ taskList }) => {
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
          <Typography>Нет задач</Typography>
        </Box>
      )}
      {!isTask && <TaskList taskList={taskList} />}
    </Box>
  );
};
