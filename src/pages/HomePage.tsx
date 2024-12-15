//@ts-expect-error: for test
import React from 'react';
import { useState } from 'react';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { FilterPanel } from '../components/FilterPanel';
import { CustomButton } from '../components/elements/CustomButton';
import { TaskInput } from '../components/TaskInput';
import { ActiveTasks, selectFilter, selectTasks } from '../store/selectors';

import { TasksDispatch } from '../store/taskStore';
import { addTask, changeFilter, clearCompleted } from '../store/taskSlice';
import { FilterTasks } from '../general/tasks/FilterTasks';
import { Tasks } from '../components/Tasks';
import { Logo } from '../components/Logo';
import { QuantityActiveTasks } from '../components/QuantityActiveTasks';

export function HomePage() {
  const [taskText, setTaskText] = useState<string>('');
  const [showTasks, setShowTasks] = useState<boolean>(true);
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
        <Logo />
        <Box
          display={'flex'}
          flexDirection={'column'}
          sx={{
            backgroundColor: ' #fff',
            boxShadow: ' 0 2px 4px 0 rgba(0, 0, 0, 0.2),0 25px 50px 0 rgba(0, 0, 0, 0.1)',
          }}
        >
          <TaskInput
            taskText={taskText}
            setTaskText={setTaskText}
            handleClickAdd={() => handleAddTask()}
            showTasks={showTasks}
            setShowTasks={setShowTasks}
          />
          {showTasks && <Tasks filter={filter} taskList={tasks} />}
          <Box display={'flex'} flexDirection={'row'} gap={'40px'} alignItems={'center'} sx={{ margin: '10px 15px' }}>
            <QuantityActiveTasks quantityActiveTasks={quantityActiveTasks} />
            <FilterPanel activeBtn={filter} onClick={handleChangeFilter} />
            <CustomButton text='Clear completed' cb={handleClearCompleted} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
