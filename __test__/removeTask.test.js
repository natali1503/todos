import React from 'react';
import { waitFor, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import App from '../src/App';
import { screen, render } from './test-utils';

describe('addTask', () => {
  it('addNewTask', async () => {
    render(<App />, {});
    const taskInput = await waitFor(() => screen.getByTestId('taskInput'));
    await userEvent.type(taskInput, 'Test task');
    const addTaskBtn = screen.getByTestId('addTask');
    await userEvent.click(addTaskBtn);
    const taskItem = await waitFor(() => screen.getByText('Test task'));
    const taskContainer = taskItem.closest('div'); // Или div, если другой контейнер
    const removeTaskBtn = within(taskContainer).getByTestId('removeTask'); // Текст кнопки
    await userEvent.click(removeTaskBtn);
    expect(taskItem).not.toBeInTheDocument();
  });
});
