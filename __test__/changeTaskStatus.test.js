import React from 'react';
import { waitFor, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import App from '../src/App';
import { screen, render } from './test-utils';

describe('Change task status', () => {
  afterEach(() => {
    localStorage.clear();
  });
  it('Change task status', async () => {
    render(<App />, {});
    const taskItems = await waitFor(() => screen.getAllByTestId('taskItem'));
    const taskIteamForChangeStatus = taskItems[0];
    const checkboxTaskIteam = within(taskIteamForChangeStatus).getByRole('checkbox');
    expect(checkboxTaskIteam).not.toBeChecked();
    await userEvent.click(checkboxTaskIteam);
    expect(checkboxTaskIteam).toBeChecked();
  });
  it('Clearing completed tasks', async () => {
    render(<App />, {});
    const taskItems = await waitFor(() => screen.getAllByTestId('taskItem'));
    const taskIteamForChangeStatus = taskItems[0];
    const checkboxTaskIteam = within(taskIteamForChangeStatus).getByRole('checkbox');
    const clearCompletedBtn = screen.getByText('Clear completed');
    await userEvent.click(checkboxTaskIteam);
    await userEvent.click(clearCompletedBtn);
    expect(taskIteamForChangeStatus).not.toBeInTheDocument();
  });
});
