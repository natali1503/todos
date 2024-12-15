import React from 'react';
import { waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import App from '../src/App';
import { screen, render } from './test-utils';

describe('TaskInput', () => {
  it('TaskInput display test', async () => {
    render(<App />, {});
    await waitFor(() => {
      const taskInput = screen.queryByTestId('taskInput');
      expect(taskInput).toBeInTheDocument();
    });
  });

  it('TaskInput display with correct placeholder', async () => {
    render(<App />, {});
    await waitFor(() => {
      const taskInput = screen.getByPlaceholderText('What needs to be done?');
      expect(taskInput).toBeInTheDocument();
    });
  });

  it('Simulate entering a value into an input', async () => {
    render(<App />, {});
    const taskInput = await waitFor(() => screen.getByTestId('taskInput'));
    await userEvent.type(taskInput, 'Test task');
    expect(taskInput).toHaveValue('Test task');
  });

  it('Clear input after input', async () => {
    render(<App />, {});
    const taskInput = await waitFor(() => screen.getByTestId('taskInput'));
    await userEvent.type(taskInput, 'Test task');
    const clearInputBtn = screen.getByTestId('clearInput');
    await userEvent.click(clearInputBtn);
    expect(taskInput).toHaveValue('');
  });
  it('Clear input after input', async () => {
    render(<App />, {});
    const taskInput = await waitFor(() => screen.getByTestId('taskInput'));
    await userEvent.type(taskInput, 'Test task');
    const addTaskBtn = screen.getByTestId('addTask');
    expect(addTaskBtn).toBeInTheDocument();
  });
  it('After clearing input the add button is unavailable', async () => {
    render(<App />, {});
    const taskInput = await waitFor(() => screen.getByTestId('taskInput'));
    await userEvent.type(taskInput, 'Test task');
    const clearInputBtn = screen.getByTestId('clearInput');
    await userEvent.click(clearInputBtn);
    const addTaskBtn = screen.getByTestId('addTask');
    expect(getComputedStyle(addTaskBtn).visibility).toBe('hidden');
  });
});
