import React from 'react';
import { Box, Typography } from '@mui/material';
interface IQuantityActiveTasks {
  quantityActiveTasks: number;
}

export const QuantityActiveTasks: React.FC<IQuantityActiveTasks> = ({ quantityActiveTasks }) => {
  return (
    <Box minWidth={'max-content'}>
      <Typography>{quantityActiveTasks} items left</Typography>
    </Box>
  );
};
