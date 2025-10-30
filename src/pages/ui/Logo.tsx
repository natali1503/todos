import React from 'react';
import { Box, Typography } from '@mui/material';

export const Logo: React.FC = () => {
  return (
    <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} width={'100%'}>
      <Typography
        color='#c4b6b5'
        fontWeight={200}
        letterSpacing='-4px'
        sx={{
          wordSpacing: '20px',
          typography: { xs: 'h3', sm: 'h2', md: 'h1' },
        }}
      >
        Список дел
      </Typography>
    </Box>
  );
};
