import { Box, Checkbox, FormControlLabel, IconButton } from '@mui/material';
import React from 'react';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ClearIcon from '@mui/icons-material/Clear';
import { IdTaskType } from '../../general/tasks/ITask';

interface TaskItemProps {
  id: IdTaskType;
  text: string;
  checked: boolean;
  onChange: (id: IdTaskType) => void;
  removeTask: (id: IdTaskType) => void;
}
export const TaskItem: React.FC<TaskItemProps> = ({ id, text, checked, onChange, removeTask }) => {
  const handleOnChange = () => {
    onChange(id);
  };
  return (
    <Box display={'flex'} flexDirection={'row'} sx={{ borderBottom: '1px solid #acacac' }}>
      <FormControlLabel
        data-testid={'taskItem'}
        control={
          <Checkbox
            onChange={handleOnChange}
            checked={checked}
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={<CheckCircleOutlineIcon sx={{ color: '#76c0b1' }} />}
          />
        }
        label={text}
        sx={{
          color: checked ? ' rgb(180, 175, 175)' : '#000',
          backgroundColor: '#fff',

          width: '100%',
          margin: 0,
          textDecoration: checked ? 'line-through' : 'none',
        }}
      />
      <IconButton data-testid='removeTask' onClick={() => removeTask(id)}>
        <ClearIcon />
      </IconButton>
    </Box>
  );
};
