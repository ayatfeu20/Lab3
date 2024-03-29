import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import SearchedExercises from './SearchedExercises';
import { fetchData } from "../utility/fetchData";


jest.mock('../utility/fetchData', () => ({
  fetchData: jest.fn(),
  exerciseOptions: {} 
}));


describe('SearchedExercises component', () => {
    it('fetches and renders exercises when body part changes', async () => {
      
      const exercisesData = [
        { id: 1, name: 'Exercise 1' },
        { id: 2, name: 'Exercise 2' }
      ];
  
      
      fetchData.mockResolvedValueOnce(exercisesData);
  
      
      render(<SearchedExercises exercises={[]} bodyPart="back" setExercises={() => {}} />);
  
      
      await waitFor(() => {
        expect(fetchData).toHaveBeenCalledTimes(1);
      });
  
     
    });
  

  it('renders no exercises found message when no exercises are returned', async () => {
    const setExercises = jest.fn();
    const bodyPart = 'back';

    
    fetchData.mockResolvedValueOnce([]);

    render(<SearchedExercises exercises={[]} bodyPart={bodyPart} setExercises={setExercises} />);

    
    await waitFor(() => {
      expect(fetchData).toHaveBeenCalledTimes(1);
    });

    
    expect(setExercises).toHaveBeenCalledWith([]);

    
    expect(screen.getByText('Ooops! No Exercises Found, try another search term'));
  });
});
