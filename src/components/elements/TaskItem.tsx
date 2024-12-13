import { Checkbox, FormControlLabel } from '@mui/material';

import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

interface TaskItemProps {
  text: string;
  checked: boolean;
}
export const TaskItem: React.FC<TaskItemProps> = ({ text, checked }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox checked={checked} icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleOutlineIcon />} />
      }
      label={text}
      sx={{
        backgroundColor: '#fff',
        borderBottom: '1px solid #acacac',
        width: '100%',
        margin: 0,
      }}
    />
  );
};
