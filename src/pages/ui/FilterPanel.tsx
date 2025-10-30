import React from 'react';
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';

import { FilterTasks, FilterTasksRuName, FilterTasksType } from '../../types/task';

interface IFilterPanelProps {
  activeBtn: FilterTasksType;
  onClick: (filter: FilterTasksType) => void;
}
export const FilterPanel: React.FC<IFilterPanelProps> = ({ activeBtn, onClick }) => {
  function handleChoice(filter: FilterTasksType) {
    onClick(filter);
  }

  return (
    <Box display='flex' flexDirection='row' gap='10px' alignItems='center' justifyContent='flex-end'>
      <ToggleButtonGroup
        value={activeBtn}
        exclusive
        onChange={(_, value) => {
          handleChoice(value);
        }}
        aria-label='Platform'
        sx={{
          border: 'none',
          borderBottom: 'none',
          borderRadius: '0',
          overflow: 'hidden',
          boxShadow: ' 0 2px 4px 0 rgba(0, 0, 0, 0.2),0 25px 50px 0 rgba(0, 0, 0, 0.1)',
          '& .MuiToggleButtonGroup-grouped': {
            borderRadius: 0,
            border: 'none',
            borderBottom: '1px solid #c4b6b5',
            '&:not(:first-of-type)': {
              borderLeft: '1px solid #c4b6b5',
            },
          },
          '& .MuiToggleButton-root': {
            backgroundColor: 'white',
            color: 'black',
            textTransform: 'none',
            padding: '4px 16px',
            '&:hover': { backgroundColor: '#eeeaea' },
            '&.Mui-selected': {
              color: 'rgba(0, 0, 0, 0.87)',
              backgroundColor: '#f5f0f0',
            },
          },
        }}
      >
        <ToggleButton value={FilterTasks.all}>{FilterTasksRuName[FilterTasks.all]}</ToggleButton>
        <ToggleButton value={FilterTasks.active}>{FilterTasksRuName[FilterTasks.active]}</ToggleButton>
        <ToggleButton value={FilterTasks.completed}>{FilterTasksRuName[FilterTasks.completed]}</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};
