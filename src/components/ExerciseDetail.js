import React from "react";
import Image from "next/image";


const ExerciseDetail = ({ exerciseDetail }) => {
 
  const {  gifUrl, name} = exerciseDetail;
  
  return (
    <div className="exercise-detail">
      <Image
        src={gifUrl}
        alt={name}
        width={729}
        height={742}
        className="exercise-detail-img"
      />
      <div className="exercise-detail-text">
        <p className="exercise-detail-name">{name}</p>
        <p style={{ textDecoration: 'underline' }}>Instruction</p>
{exerciseDetail.instructions ? (
  <p className="exercise-detail-description">
    {exerciseDetail.instructions}
  </p>
) : (
  <p className="exercise-detail-description">No instructions available.</p>
)}

      </div>
    </div>
  );
};

export default ExerciseDetail;
