import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ExerciseCard = ({ exercise }) => {
  return (
    <Link href="/Exercise/[id]" as={`/Exercise/${exercise.id}`}>
     <a>{exercise.name}</a>

      <Image src={exercise.gifUrl} alt={exercise.name} width={330} height={330} />
      
    </Link>
  );
};

export default ExerciseCard;
