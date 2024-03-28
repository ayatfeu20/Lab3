

import ExerciseDetail from "@/components/ExerciseDetail";
import Youtube from "@/components/Youtube";
import { exerciseOptions, fetchData, youtubeOptions } from "@/utility/fetchData";
import React from "react";

const ExercisePage = ({ exerciseDetail, youtubeDetail }) => {
 
  return (
    <div>
      <ExerciseDetail exerciseDetail={exerciseDetail} />
      <Youtube youtubeDetail={youtubeDetail} exerciseDetail={exerciseDetail} />
    </div>
  );
};

export async function getStaticPaths() {
  // Fetch dynamic paths for exercises
  const response = await fetch("https://exercisedb.p.rapidapi.com/exercises/all", exerciseOptions);
  const data = await response.json();
  
console.log(data);

  // Map data to array of paths
  const paths = data.map((exercise) => ({
    params: { id: exercise.id.toString() },
  }));

  return {
    paths,
    fallback: false, // or 'blocking' if you want to use Incremental Static Regeneration
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const exerciseDetailData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exerciseOptions);

  const youtubeDetailData = await fetchData(
    `https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetailData.name}`,
    youtubeOptions
  );

  return {
    props: {
      exerciseDetail: exerciseDetailData,
      youtubeDetail: youtubeDetailData.contents,
    },
  };
}

export default ExercisePage;