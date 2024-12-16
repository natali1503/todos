import React from 'react';
import { waitFor, fireEvent } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import App from '../src/App';
import { screen, render } from './test-utils';

describe('Editing task', () => {
  afterEach(() => {
    localStorage.clear();
  });
  it('Editing task', async () => {
    render(<App />, {});
    const taskInput = await waitFor(() => screen.getByTestId('taskInput'));
    await userEvent.type(taskInput, 'Test task');
    const addTaskBtn = screen.getByTestId('addTask');
    await userEvent.click(addTaskBtn);
    const taskItem = await waitFor(() => screen.getByDisplayValue('Test task'));
    await userEvent.type(taskItem, ' edit');
    fireEvent.keyUp(taskItem, { key: 'Enter', code: 'Enter', charCode: 13 });
    await waitFor(() => {
      expect(taskItem).toHaveValue('Test task edit');
    });
  });
});
