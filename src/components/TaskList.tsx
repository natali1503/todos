import { Box } from '@mui/material';
import { IInitialState, StatusTask } from '../stor/taskSlice';
import { TaskItem } from './elements/TaskItem';

interface ITaskListProps {
  taskList: IInitialState;
}

export const TaskList: React.FC<ITaskListProps> = ({ taskList }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '90%' }}>
      {taskList.data.map((taskItem) => (
        <TaskItem
          text={taskItem.task}
          key={taskItem.idTask}
          checked={taskItem.status === StatusTask.completed ? true : false}
        />
      ))}
    </Box>
  );
};
