import React from 'react';
import Layout from '../../components/Layout';
import ExerciseDetail from '../../components/ExerciseDetail';
import { fetchData, exerciseOptions } from '../../utility/fetchData';

const ExerciseDetailPage = ({ exerciseDetail }) => {
  return (
    <Layout>
      <ExerciseDetail exerciseDetail={exerciseDetail} />
    </Layout>
  );
};

export async function getStaticPaths() {
  // Fetch exercise IDs
  const exercisesData = await fetchData(
    "https://exercisedb.p.rapidapi.com/exercises",
    exerciseOptions
  );

  // Map exercise IDs to paths
  const paths = exercisesData.map((exercise) => ({
    params: { id: exercise.id.toString() }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  // Fetch exercise details by ID
  const exerciseDetail = await fetchData(
    `https://exercisedb.p.rapidapi.com/exercises/${params.id}`,
    exerciseOptions
  );

  return {
    props: {
      exerciseDetail
    }
  };
}

export default ExerciseDetailPage;
