import React from 'react';
import App from '../src/App';
import { store, screen, render } from './test-utils';
import { dataInitial } from '../src/init';
const mockedStore = store();
const initialState = dataInitial;
describe('', () => {
  it('', () => {});
  it('should render the app with the initialState', () => {
    render(<App />, initialState);

    const TaskInput = screen.queryByTestId('TaskInput');
    expect(TaskInput).not.toBeInTheDocument();
  });
});
