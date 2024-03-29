
import React, { useState } from 'react';

const FitnessCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100; 
    const bmiValue = weightInKg / (heightInM * heightInM);
    setBMI(bmiValue.toFixed(2)); 
  };

  const getFitnessText = () => {
    if (!bmi) return ''; 

    if (bmi < 18.5) {
      return "You are underweight. You may need to gain weight.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "Your weight is in the healthy range.";
    } else if (bmi >= 24.9 && bmi < 29.9) {
      return "You are overweight. You may need to lose weight.";
    } else {
      return "You are obese. You may need to lose weight for better health.";
    }
  };

  const clearInputs = () => {
    setWeight('');
    setHeight('');
    setBMI(null);
  };

  return (
    <div>
      <h3>Fitness Calculator</h3>
      <div>
        <label>Weight (kg):</label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <div>
        <label>Height (cm):</label>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <div className='fitbtn'>
         <button  onClick={calculateBMI}>Calculate BMI</button> 
         <button  onClick={clearInputs}>Clear</button> 
      </div>
      {bmi && <p>Your BMI: {bmi}</p>}
      <p>{getFitnessText()}</p> 
    </div>
  );
};

export default FitnessCalculator;
