import React from 'react';
import { waitFor, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import App from '../src/App';
import { screen, render } from './test-utils';

describe('removeTask', () => {
  it('Remove new task', async () => {
    render(<App />, {});
    const taskInput = await waitFor(() => screen.getByTestId('taskInput'));
    await userEvent.type(taskInput, 'Test task');
    const addTaskBtn = screen.getByTestId('addTask');
    await userEvent.click(addTaskBtn);
    const taskItem = await waitFor(() => screen.getByText('Test task'));
    const taskContainer = taskItem.closest('div');
    const removeTaskBtn = within(taskContainer).getByTestId('removeTask');
    await userEvent.click(removeTaskBtn);
    await waitFor(() => {
      expect(taskItem).not.toBeInTheDocument();
    });
  });
});
