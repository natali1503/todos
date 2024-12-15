import { Box, IconButton, Input } from '@mui/material';
import { HighlightOff } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';
interface ITaskInputProps {
  taskText: string;
  setTaskText: (value: string) => void;
  handleClickAdd: () => void;
}

export const TaskInput: React.FC<ITaskInputProps> = ({ taskText, setTaskText, handleClickAdd }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(event.target.value);
  };
  const handleClick = () => {
    setTaskText('');
  };

  return (
    <Input
      inputProps={{ 'data-testid': 'taskInput' }}
      placeholder='What needs to be done?'
      value={taskText}
      onKeyUp={(e) => {
        if (e.key === 'Enter') handleClickAdd();
      }}
      onChange={handleInputChange}
      startAdornment={<ExpandMoreIcon sx={{ color: '#acacac' }} />}
      endAdornment={
        <Box display={'flex'} flexDirection={'row'} gap={'2px'}>
          <IconButton
            onClick={handleClickAdd}
            sx={{ visibility: taskText ? 'visible' : 'hidden' }}
            data-testid='addTask'
          >
            <AddIcon />
          </IconButton>
          <IconButton
            onClick={handleClick}
            sx={{ visibility: taskText ? 'visible' : 'hidden' }}
            data-testid='clearInput'
          >
            <HighlightOff />
          </IconButton>
        </Box>
      }
      sx={{
        padding: '0 10px',
        backgroundColor: '#fff',
        '& .MuiInputBase-input::placeholder': {
          fontStyle: 'italic',
        },
      }}
    />
  );
};
