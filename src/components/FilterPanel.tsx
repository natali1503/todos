import { Box } from '@mui/material';
import { CustomButton } from './elements/CustomButton';
import { useDispatch } from 'react-redux';
import {
  selectActiveTasksRedux as selectActiveTasks,
  selectCopmletedTasksRedux as selectCopmletedTasks,
  loadToLocalStorageRedux as selectAllTasks,
} from '../localStorage/localStorageRedux';
import { TasksDispatch } from '../stor/taskStore';
import { FilterTasks } from '../stor/taskSlice';
import React from 'react';
interface IFilterPanelProps {
  activeBtn: FilterTasks;
  onClick: (filter: FilterTasks) => void;
}
export const FilterPanel: React.FC<IFilterPanelProps> = ({ activeBtn, onClick }) => {
  const dispatch = useDispatch<TasksDispatch>();

  const filterActions = {
    [FilterTasks.all]: () => dispatch(selectAllTasks()),
    [FilterTasks.active]: () => dispatch(selectActiveTasks()),
    [FilterTasks.completed]: () => dispatch(selectCopmletedTasks()),
  };

  function handleChoice(filter: FilterTasks) {
    const action = filterActions[filter];
    if (action) {
      action();
      onClick(filter);
    } else {
      console.warn('Unknown filter:', filter);
    }
  }

  return (
    <Box display='flex' flexDirection='row' gap='10px' alignItems='center'>
      <CustomButton
        text={FilterTasks.all}
        cb={() => handleChoice(FilterTasks.all)}
        status={activeBtn === FilterTasks.all}
      />
      <CustomButton
        text={FilterTasks.active}
        cb={() => handleChoice(FilterTasks.active)}
        status={activeBtn === FilterTasks.active}
      />
      <CustomButton
        text={FilterTasks.completed}
        cb={() => handleChoice(FilterTasks.completed)}
        status={activeBtn === FilterTasks.completed}
      />
    </Box>
  );
};
