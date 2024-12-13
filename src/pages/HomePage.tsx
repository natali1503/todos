import { Box, Typography } from '@mui/material';
import { PanelButtons } from '../components/PanelButtons';
import { CustomButton } from '../components/elements/CustomButton';
import { TaskInput } from '../components/TaskInput';
import { useEffect, useState } from 'react';

import { TaskList } from '../components/TaskList';
import { useSelector } from 'react-redux';
import { RootState } from '../stor/taskStore';

export function HomePage() {
  const [taskText, setTaskText] = useState<string>('');
  const task = useSelector((state: RootState) => state.tasks);

  useEffect(() => {
    console.log(taskText);
  }, [taskText]);

  return (
    <Box
      display={'flex'}
      flexDirection={'row'}
      sx={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} bgcolor={'#f5f5f5'}>
        <Box display={'flex'} flexDirection={'row'} justifyContent={'center'}>
          <Typography variant='h1' color='#e6dbda' fontWeight={200} letterSpacing='-5px'>
            todos
          </Typography>
        </Box>

        <TaskInput taskText={taskText} setTaskText={setTaskText} />

        <TaskList taskList={task} />

        <Box display={'flex'} flexDirection={'row'} gap={'40px'}>
          <p>Сколько задач осталось??</p>
          <PanelButtons />
          <CustomButton text='Clear completed' cb={() => {}} />
        </Box>
      </Box>
    </Box>
  );
}
