import React from 'react';
import App from '../src/App';
import { store, render, screen } from './test-utils';
import { dataInitial } from '../src/init';
import { waitFor } from '@testing-library/react';

const mockedStore = store();
const initialState = {};

const mockGetItem = jest.fn();
const mockSetItem = jest.fn();
const mockRemoveItem = jest.fn();

describe('InitializationTasks', () => {
  it('launching the app store is filled dataInitial', async () => {
    render(<App />, initialState);
    const taskItems = await waitFor(() => screen.getAllByTestId('taskItem'));
    expect(taskItems.length).toBe(dataInitial.data.length);
  });
});
