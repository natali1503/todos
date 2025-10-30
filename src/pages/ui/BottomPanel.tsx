import { Box } from '@mui/material';

import { QuantityActiveTasks } from './QuantityActiveTasks';
import { CustomButton } from '../../components/elements/CustomButton';

interface IBottomPanel {
  isCompletedTasks: boolean;
  quantityActiveTasks: number;
  handleClearCompleted: () => void;
}

export const BottomPanel: React.FC<IBottomPanel> = ({
  isCompletedTasks,
  quantityActiveTasks,
  handleClearCompleted,
}) => {
  return (
    <Box display={'flex'} flexDirection={'row'} gap={'40px'} alignItems={'center'} sx={{ margin: '10px 15px' }}>
      <QuantityActiveTasks quantityActiveTasks={quantityActiveTasks} />
      <CustomButton text='Очистить завершенные' cb={handleClearCompleted} disabled={!isCompletedTasks} />
    </Box>
  );
};
