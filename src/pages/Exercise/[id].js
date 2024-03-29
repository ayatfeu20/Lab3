import React from 'react';
import ExerciseDetail from '../../components/ExerciseDetail';
import Youtube from '../../components/Youtube';
import { getExerciseDetailData, getYoutubeDetailData ,exerciseOptions } from '../../../lib/request';
import { useRouter } from 'next/router';
import LoadingSpinner from '../../components/LoadingSpinner';


const ExercisePage = ({ exerciseDetail, youtubeDetail}) => {
  const router = useRouter();
  if (router.isFallback) {
    return <LoadingSpinner message="Loading Exercise Details..." />; 
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
    
    const response = await fetch("https://exercisedb.p.rapidapi.com/exercises/all", exerciseOptions);
    const data = await response.json();
    
    
    const exerciseIds = data.map(exercise => exercise.id.toString());
    
  
    const paths = exerciseIds.map(id => ({ params: { id } }));
    
    return {
      paths,
      fallback: true 
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
    
    const exerciseDetailData = await getExerciseDetailData(params.id);
    
    
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
