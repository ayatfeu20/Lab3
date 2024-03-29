import React from "react";
import Image from "next/image";

const ExerciseDetail = ({ exerciseDetail }) => {
  if (!exerciseDetail) return null; 

  const { gifUrl, name, instructions } = exerciseDetail;

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
        {instructions && instructions.length > 0 ? (
          <ul className="exercise-detail-description">
            {instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        ) : (
          <p className="exercise-detail-description">No instructions available.</p>
        )}
      </div>
    </div>
  );
};

export default ExerciseDetail;
