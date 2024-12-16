import { Box, Checkbox, FormControlLabel, IconButton, Input } from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ClearIcon from '@mui/icons-material/Clear';
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { IdTaskType } from '../../general/tasks/ITask';
import { TasksDispatch } from '../../store/taskStore';
import { changeTextTask } from '../../store/taskSlice';

interface TaskItemProps {
  id: IdTaskType;
  text: string;
  checked: boolean;
  onChange: (id: IdTaskType) => void;
  removeTask: (id: IdTaskType) => void;
}
export const TaskItem: React.FC<TaskItemProps> = ({ id, text, checked, onChange, removeTask }) => {
  const [taskText, setTaskText] = useState<string>(text);
  const ref = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch<TasksDispatch>();

  const handleOnChange = () => {
    onChange(id);
  };

  const handleChangeTextTask = (
    e:
      | React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
      | React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if ('key' in e && e.key === 'Enter') {
      dispatch(changeTextTask({ id, text: taskText }));
      if (ref.current) ref.current.blur();
    } else if (e.type === 'blur') {
      dispatch(changeTextTask({ id, text: taskText }));
    }
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
        label={''}
        sx={{
          color: checked ? ' rgb(180, 175, 175)' : '#000',
          backgroundColor: '#fff',
          margin: 0,
          textDecoration: checked ? 'line-through' : 'none',
        }}
      />
      <Input
        inputRef={ref}
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        onBlur={handleChangeTextTask}
        onKeyUp={handleChangeTextTask}
        sx={{
          border: 'none',
          width: '100%',
          '&.MuiInput-root::after': {
            borderBottom: '1px solid #c4b6b5',
          },
          '&.MuiInput-root::before ': {
            border: 'none',
            borderBottomColor: '#cfc4c3',
          },
          '&:hover:not(.Mui-disabled, .Mui-error):before': {
            borderBottom: '2px solid #c4b6b5',
          },
        }}
      />
      <IconButton data-testid='removeTask' onClick={() => removeTask(id)}>
        <ClearIcon />
      </IconButton>
    </Box>
  );
};
