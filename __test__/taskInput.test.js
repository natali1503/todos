import React from 'react';
import { waitFor } from '@testing-library/react';
import App from '../src/App';
import { screen, render } from './test-utils';

describe('TaskInput', () => {
  it('TaskInput display test', async () => {
    render(<App />, {});
    await waitFor(() => {
      const TaskInput = screen.queryByTestId('TaskInput');
      expect(TaskInput).toBeInTheDocument();
    });
  });

  it('TaskInput display with correct placeholder', async () => {
    render(<App />, {});
    await waitFor(() => {
      const TaskInput = screen.getByPlaceholderText('What needs to be done?');
      expect(TaskInput).toBeInTheDocument();
    });
  });
});
