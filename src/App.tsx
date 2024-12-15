import { Box, CssBaseline } from '@mui/material';
import { HomePage } from './pages/HomePage';
//@ts-expect-error: for test
import React from 'react';

function App() {
  return (
    <Box>
      <CssBaseline />
      <HomePage />
    </Box>
  );
}

export default App;
