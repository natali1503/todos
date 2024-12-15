import React from 'react';
import { Box, Typography } from '@mui/material';

export const Logo: React.FC = () => {
  return (
    <Box display={'flex'} flexDirection={'row'} justifyContent={'center'}>
      <Typography variant='h1' color='#c4b6b5' fontWeight={200} letterSpacing='-5px'>
        todos
      </Typography>
    </Box>
  );
};
