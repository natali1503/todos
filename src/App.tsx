import { Box, CssBaseline } from '@mui/material';
import { HomePage } from './pages/HomePage';
import React, { useEffect } from 'react';
import { initializeTasks } from './init';
import { useDispatch } from 'react-redux';
import { TasksDispatch } from './store/taskStore';
function App() {
  const dispatch = useDispatch<TasksDispatch>();
  useEffect(() => {
    // Инициализация данных при запуске приложения
    dispatch(initializeTasks());
  }, [dispatch]);
  return (
    <Box>
      <CssBaseline />
      <HomePage />
    </Box>
  );
}

export default App;
