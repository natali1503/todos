import { useState } from 'react';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { hasCompletedTasks, selectActiveTasksCount, selectFilter, selectFilteredTasks } from '../store/selectors';
import { TasksDispatch } from '../store/taskStore';
import { addTask, changeFilter, clearCompleted } from '../store/taskSlice';
import { FilterTasksType } from '../types/task';
import { Tasks } from './ui/Tasks';
import { Logo } from './ui/Logo';
import { TaskInput } from './ui/TaskInput';
import { BottomPanel } from './ui/BottomPanel';
import { FilterPanel } from './ui/FilterPanel';

export function HomePage() {
  const [taskText, setTaskText] = useState<string>('');
  const [showTasks, setShowTasks] = useState<boolean>(true);
  const tasks = useSelector(selectFilteredTasks);
  const filter = useSelector(selectFilter);
  const isCompletedTasks = useSelector(hasCompletedTasks);
  const quantityActiveTasks = useSelector(selectActiveTasksCount);
  const dispatch = useDispatch<TasksDispatch>();

  function handleClearCompleted() {
    dispatch(clearCompleted());
  }
  function handleAddTask() {
    if (taskText.length === 0) return;
    dispatch(addTask(taskText));
    setTaskText('');
  }

  function handleChangeFilter(filter: FilterTasksType) {
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
        paddingTop: '64px',
        minHeight: '100vh',
      }}
    >
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} padding={'20px'} gap={'12px'}>
        <Logo />
        <Box display={'flex'} flexDirection={'column'}>
          <FilterPanel activeBtn={filter} onClick={handleChangeFilter} />
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

            {showTasks && <Tasks taskList={tasks} />}
            <BottomPanel
              isCompletedTasks={isCompletedTasks}
              quantityActiveTasks={quantityActiveTasks}
              handleClearCompleted={handleClearCompleted}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
