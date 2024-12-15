import { Box, IconButton, Input } from '@mui/material';
import { HighlightOff } from '@mui/icons-material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';
interface ITaskInputProps {
  taskText: string;
  setTaskText: (value: string) => void;
  handleClickAdd: () => void;
  showTasks: boolean;
  setShowTasks: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TaskInput: React.FC<ITaskInputProps> = ({
  taskText,
  setTaskText,
  handleClickAdd,
  showTasks,
  setShowTasks,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(event.target.value);
  };
  const handleClickClearInput = () => {
    setTaskText('');
  };
  const handleClickShowTasks = () => {
    setShowTasks((value: boolean) => !value);
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
      startAdornment={
        <Box>
          <IconButton onClick={handleClickShowTasks}>
            {showTasks ? (
              <ExpandMoreIcon sx={{ color: '#acacac' }} />
            ) : (
              <ArrowForwardIosIcon sx={{ color: '#acacac' }} fontSize='small' />
            )}
          </IconButton>
        </Box>
      }
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
            onClick={handleClickClearInput}
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
        '&.MuiInput-root::after': {
          borderBottom: '2px solid #c4b6b5',
        },
      }}
    />
  );
};
