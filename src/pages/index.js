import React, { useState } from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Exercises from '../components/Exercises';
import SearchedExercises from '@/components/SearchedExercises';
import Sidebar from '../components/SideBar';
import { fetchData, exerciseOptions } from '../utility/fetchData';

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  return (
    <Layout>
      <Banner setExercises={setExercises} />
      <div className="container">
        <div className="main-content">
          <Exercises bodyPart={bodyPart} setBodyPart={setBodyPart} />
          <SearchedExercises
            exercises={exercises}
            bodyPart={bodyPart}
            setExercises={setExercises}
          />
        </div>
        <div className="sidebar-container">
          <Sidebar />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  try {
    const exercisesData = await fetchData(
      "https://exercisedb.p.rapidapi.com/exercises",
      exerciseOptions
    );

    return {
      props: {
        exercises: Array.isArray(exercisesData) ? exercisesData : []
      }
    };
  } catch (error) {
    console.error("Error fetching exercises:", error);
    return {
      props: {
        exercises: []
      }
    };
  }
}

export default Home;
