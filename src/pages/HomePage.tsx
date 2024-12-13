import { Box, Typography } from '@mui/material';
import { PanelButtons } from '../components/PanelButtons';
import { CustomButton } from '../components/elements/CustomButton';
import { TaskInput } from '../components/TaskInput';
import { useState } from 'react';

import { TaskList } from '../components/TaskList';
import { useSelector } from 'react-redux';
import { activeTasks, selectTasks } from '../stor/selectors';
import { useDispatch } from 'react-redux';
import { clearCompletedTasksRedux } from '../localStorage/localStorageRedux';
import { TasksDispatch } from '../stor/taskStore';
export function HomePage() {
  const [taskText, setTaskText] = useState<string>('');
  const task = useSelector(selectTasks);
  const [displayOption, setDisplayOption] = useState<string>('All');
  const dispatch = useDispatch<TasksDispatch>();

  function handleClearCompleted() {
    dispatch(clearCompletedTasksRedux());
  }

  return (
    <Box
      display={'flex'}
      flexDirection={'row'}
      bgcolor={'#f5f5f5'}
      sx={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} padding={'20px'}>
        <Box display={'flex'} flexDirection={'row'} justifyContent={'center'}>
          <Typography variant='h1' color='#c4b6b5' fontWeight={200} letterSpacing='-5px'>
            todos
          </Typography>
        </Box>
        <Box display={'flex'} flexDirection={'column'} sx={{ backgroundColor: ' #fff' }}>
          <TaskInput taskText={taskText} setTaskText={setTaskText} />

          {task.length === 0 ? <div>Not task</div> : <TaskList taskList={task} />}

          <Box display={'flex'} flexDirection={'row'} gap={'40px'} alignItems={'center'} sx={{ margin: '0 10px' }}>
            <Box minWidth={'max-content'}>
              <p>{activeTasks()} items left</p>
            </Box>

            <PanelButtons activeBtn={displayOption} onClick={setDisplayOption} />
            <CustomButton text='Clear completed' cb={handleClearCompleted} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
