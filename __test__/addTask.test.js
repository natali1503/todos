import React from 'react';
import { waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import App from '../src/App';
import { screen, render } from './test-utils';

const mockGetItem = jest.fn();
const mockSetItem = jest.fn();
const mockRemoveItem = jest.fn();
describe('addTask', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      writable: true,
      value: {
        getItem: (...args) => mockGetItem(...args),
        setItem: (...args) => mockSetItem(...args),
        removeItem: (...args) => mockRemoveItem(...args),
      },
    });
  });
  afterEach(() => {
    mockSetItem.mockClear();
  });
  it('addNewTask', async () => {
    render(<App />, {});
    const initialCalls = mockSetItem.mock.calls.length;
    const taskInput = await waitFor(() => screen.getByTestId('taskInput'));
    await userEvent.type(taskInput, 'Test task');
    const addTaskBtn = screen.getByTestId('addTask');
    await userEvent.click(addTaskBtn);
    expect(mockSetItem).toHaveBeenCalledTimes(initialCalls + 1);
  });
});
