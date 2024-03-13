import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ExerciseCard = ({ exercise }) => {
  return (
    <Link href={`/exercise/${exercise.id}`} className="exercise-card">
      <Image src={exercise.gifUrl} alt={exercise.name} width={330} height={330} />
      <p className="exercise-card-name">{exercise.name}</p>
    </Link>
  );
};

export default ExerciseCard;
