import React from 'react';
import ExerciseDetail from '../../components/ExerciseDetail';
import Youtube from '../../components/Youtube';
import { getExerciseDetailData, getYoutubeDetailData ,exerciseOptions } from '../../../lib/request';
import { useRouter } from 'next/router';

const ExercisePage = ({ exerciseDetail, youtubeDetail}) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ExerciseDetail exerciseDetail={exerciseDetail} />
      <Youtube youtubeDetail={youtubeDetail} exerciseDetail={exerciseDetail} />
    </div>
  );
};

export async function getStaticPaths() {
  try {
    // Fetch the list of exercise IDs
    const response = await fetch("https://exercisedb.p.rapidapi.com/exercises/all", exerciseOptions);
    const data = await response.json();
    
    // Extract exercise IDs from the data
    const exerciseIds = data.map(exercise => exercise.id.toString());
    
    // Map the exercise IDs to dynamic paths
    const paths = exerciseIds.map(id => ({ params: { id } }));
    
    return {
      paths,
      fallback: true // Set fallback to true for incremental static generation
    };
  } catch (error) {
    console.error("Error fetching exercise IDs:", error);
    return {
      paths: [],
      fallback: false
    };
  }
}

export async function getStaticProps({ params }) {
  try {
    // Fetch exercise detail based on the ID
    const exerciseDetailData = await getExerciseDetailData(params.id);
    
    // Fetch YouTube detail based on the exercise name
    const youtubeDetailData = await getYoutubeDetailData(exerciseDetailData.name);
    
    return {
      props: {
        exerciseDetail: exerciseDetailData,
        youtubeDetail: youtubeDetailData.contents
      }
    };
  } catch (error) {
    console.error("Error fetching exercise detail:", error);
    return {
      props: {
        exerciseDetail: {},
        youtubeDetail: []
      }
    };
  }
}


export default ExercisePage;
