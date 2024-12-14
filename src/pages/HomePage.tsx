import { Box, Typography } from '@mui/material';
import { FilterPanel } from '../components/FilterPanel';
import { CustomButton } from '../components/elements/CustomButton';
import { TaskInput } from '../components/TaskInput';
import { useState } from 'react';
import React from 'react';
import { TaskList } from '../components/TaskList';
import { useSelector } from 'react-redux';
import { ActiveTasks, selectFilter, selectTasks } from '../stor/selectors';
import { useDispatch } from 'react-redux';
import { clearCompletedTasksRedux, saveToLocalStoragesRedux } from '../localStorage/localStorageRedux';
import { TasksDispatch } from '../stor/taskStore';
import { changeFilter, FilterTasks } from '../stor/taskSlice';

export function HomePage() {
  const [taskText, setTaskText] = useState<string>('');
  const task = useSelector(selectTasks);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch<TasksDispatch>();
  const quantityActiveTasks = ActiveTasks();

  function handleClearCompleted() {
    dispatch(clearCompletedTasksRedux());
  }
  function handleAddTask() {
    if (taskText.length === 0) return;
    dispatch(saveToLocalStoragesRedux(taskText));
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

          {task.length === 0 ? <div>Not task</div> : <TaskList taskList={task} />}

          <Box display={'flex'} flexDirection={'row'} gap={'40px'} alignItems={'center'} sx={{ margin: '0 10px' }}>
            <Box minWidth={'max-content'}>
              <p>{quantityActiveTasks} items left</p>
            </Box>

            <FilterPanel activeBtn={filter} onClick={handleChangeFilter} />
            <CustomButton text='Clear completed' cb={handleClearCompleted} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
