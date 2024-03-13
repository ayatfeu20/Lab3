import React from "react";

const ExerciseDetail = ({ exerciseDetail }) => {
  return (
    <div className="exercise-detail">
      <img
        src={exerciseDetail.gifUrl}
        alt={exerciseDetail.name}
        width={729}
        height={742}
        className="exercise-detail-img"
      />
      <div className="exercise-detail-text">
        <p className="exercise-detail-name">{exerciseDetail.name}</p>
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
