import { IconButton, Input } from '@mui/material';
import { HighlightOff } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ITaskInputProps {
  taskText: string;
  setTaskText: (value: string) => void;
}

export const TaskInput: React.FC<ITaskInputProps> = ({ taskText, setTaskText }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(event.target.value);
  };
  const handleClick = () => {
    setTaskText('');
  };

  return (
    <Input
      placeholder='What needs to be done?'
      value={taskText}
      onChange={handleInputChange}
      startAdornment={<ExpandMoreIcon sx={{ color: '#acacac' }} />}
      endAdornment={
        <IconButton onClick={handleClick} sx={{ visibility: taskText ? 'visible' : 'hidden' }}>
          <HighlightOff />
        </IconButton>
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
