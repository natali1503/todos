import { Checkbox, FormControlLabel } from '@mui/material';

import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

interface TaskItemProps {
  id: number;
  text: string;
  checked: boolean;
  onChange: (id: number) => void;
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
          checkedIcon={<CheckCircleOutlineIcon />}
        />
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
