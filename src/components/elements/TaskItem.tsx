import { Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { IdTaskType } from '../../store/taskSlice';

interface TaskItemProps {
  id: IdTaskType;
  text: string;
  checked: boolean;
  onChange: (id: IdTaskType) => void;
}
export const TaskItem: React.FC<TaskItemProps> = ({ id, text, checked, onChange }) => {
  const handleOnChange = () => {
    onChange(id);
  };
  return (
    <FormControlLabel
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
        borderBottom: '1px solid #acacac',
        width: '100%',
        margin: 0,
        textDecoration: checked ? 'line-through' : 'none',
      }}
    />
  );
};
