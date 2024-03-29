import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Exercises from './Exercises';
import { fetchData } from '../utility/fetchData'; 

jest.mock('../utility/fetchData'); 

describe('Exercises component', () => {
  beforeEach(() => {
    fetchData.mockResolvedValueOnce(['bodyPart1', 'bodyPart2']); 
  });

  afterEach(() => {
    jest.clearAllMocks(); 
  });

  it('renders component with fetched body parts', async () => {
    render(<Exercises />);

    
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
  
    
    userEvent.click(screen.getByText('bodyPart1'));
  
   
  });
})