import React from 'react';
import App from '../src/App';
import { store, screen, render } from './test-utils';
import { dataInitial, initializeTasks } from '../src/init';
import { loadFromLocalStorage } from '../src/localStorage/loadFromLocalStorage';
import { waitFor } from '@testing-library/react';

const mockedStore = store();
const initialState = {};

const mockGetItem = jest.fn();
const mockSetItem = jest.fn();
const mockRemoveItem = jest.fn();

describe('InitializationTasks', () => {
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

  it('launching the app store is filled dataInitial', async () => {
    render(<App />, initialState);
    await waitFor(() => {
      expect(mockSetItem).toHaveBeenCalledTimes(dataInitial.data.length);
    });
  });
});
