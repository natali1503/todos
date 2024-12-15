import React from 'react';
import { Box } from '@mui/material';
import { CustomButton } from './elements/CustomButton';
import { FilterTasks } from '../general/tasks/FilterTasks';

interface IFilterPanelProps {
  activeBtn: FilterTasks;
  onClick: (filter: FilterTasks) => void;
}
export const FilterPanel: React.FC<IFilterPanelProps> = ({ activeBtn, onClick }) => {
  function handleChoice(filter: FilterTasks) {
    onClick(filter);
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
