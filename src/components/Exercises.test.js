import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Exercises from './Exercises';
import { fetchData } from '../utility/fetchData'; // Assuming fetchData is exported from '../utility/fetchData'

jest.mock('../utility/fetchData'); // Mock fetchData function

describe('Exercises component', () => {
  beforeEach(() => {
    fetchData.mockResolvedValueOnce(['bodyPart1', 'bodyPart2']); // Mock resolved data for fetchData
  });

  afterEach(() => {
    jest.clearAllMocks(); // Clear all mocks after each test
  });

  it('renders component with fetched body parts', async () => {
    render(<Exercises />);

    // Wait for fetchData to be called and data to be loaded
    await waitFor(() => {
      expect(fetchData).toHaveBeenCalledTimes(1);
    });

    expect(screen.getByText('Different BodyParts, Different Exercises'));
    expect(screen.getByText('bodyPart1'));
    expect(screen.getByText('bodyPart2'));
  });

  it('calls setBodyPart when body part is clicked', async () => {
    const setBodyPart = jest.fn();
    render(<Exercises setBodyPart={setBodyPart} />);

    await waitFor(() => {
      expect(fetchData).toHaveBeenCalledTimes(1);
    });

    // Click on the first body part
    userEvent.click(screen.getByText('bodyPart1'));

    // Check if setBodyPart was called with the expected argument
    expect(setBodyPart).toHaveBeenCalledWith('bodyPart1');
  });
});
