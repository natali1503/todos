import React from 'react';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { FilterPanel } from '../components/FilterPanel';
import { CustomButton } from '../components/elements/CustomButton';
import { TaskInput } from '../components/TaskInput';
import { TaskList } from '../components/TaskList';

import { ActiveTasks, selectFilter, selectTasks } from '../store/selectors';

import { TasksDispatch } from '../store/taskStore';
import { addTask, changeFilter, clearCompleted } from '../store/taskSlice';
import { FilterTasks } from '../general/tasks/FilterTasks';

export function HomePage() {
  const [taskText, setTaskText] = useState<string>('');
  const tasks = useSelector(selectTasks);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch<TasksDispatch>();
  const quantityActiveTasks = ActiveTasks();

  function handleClearCompleted() {
    dispatch(clearCompleted());
    dispatch(changeFilter(filter));
  }
  function handleAddTask() {
    if (taskText.length === 0) return;
    dispatch(addTask(taskText));
    dispatch(changeFilter(filter));
    setTaskText('');
  }

  function handleChangeFilter(filter: FilterTasks) {
    dispatch(changeFilter(filter));
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
          <TaskInput taskText={taskText} setTaskText={setTaskText} handleClickAdd={() => handleAddTask()} />
          {tasks.length === 0 ? (
            <Box
              display={'flex'}
              flexDirection={'row'}
              alignItems={'center'}
              sx={{ paddingLeft: '15px', minHeight: '40px' }}
            >
              <Typography> {`No ${filter.toLowerCase()} tasks`}</Typography>
            </Box>
          ) : (
            <TaskList taskList={tasks} />
          )}

          <Box display={'flex'} flexDirection={'row'} gap={'40px'} alignItems={'center'} sx={{ margin: '10px 15px' }}>
            <Box minWidth={'max-content'}>
              <Typography>{quantityActiveTasks} items left</Typography>
            </Box>

            <FilterPanel activeBtn={filter} onClick={handleChangeFilter} />
            <CustomButton text='Clear completed' cb={handleClearCompleted} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
