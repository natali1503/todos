import { Box } from '@mui/material';
import { CustomButton } from './elements/CustomButton';
import { useDispatch } from 'react-redux';
import {
  selectActiveTasksRedux as selectActiveTasks,
  selectCopmletedTasksRedux as selectCopmletedTasks,
  loadToLocalStorageRedux as selectAllTasks,
} from '../localStorage/localStorageRedux';
import { TasksDispatch } from '../stor/taskStore';

interface IPanelButtons {
  activeBtn: string;
  onClick: (name: string) => void;
}
export const PanelButtons: React.FC<IPanelButtons> = ({ activeBtn, onClick }) => {
  const dispatch = useDispatch<TasksDispatch>();

  function handleChoice(type: string) {
    if (type === 'All') dispatch(selectAllTasks());
    if (type === 'Active') {
      dispatch(selectActiveTasks());
    }
    if (type === 'Completed') {
      dispatch(selectCopmletedTasks());
    }
    onClick(type);
  }

  return (
    <Box display={'flex'} flexDirection={'row'} gap={'10px'} alignItems={'center'}>
      <CustomButton text={'All'} cb={() => handleChoice('All')} status={activeBtn === 'All'} />
      <CustomButton text={'Active'} cb={() => handleChoice('Active')} status={activeBtn === 'Active'} />
      <CustomButton text={'Completed'} cb={() => handleChoice('Completed')} status={activeBtn === 'Completed'} />
    </Box>
  );
};
