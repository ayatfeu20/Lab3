import ExerciseDetail from "@/components/ExerciseDetail";
import Youtube from "@/components/Youtube";
import {
  exerciseOptions,
  fetchData,
  youtubeOptions,
} from "@/utility/fetchData";
import React, { useEffect, useState } from "react";

const ExercisePage = ({ exerciseDetail, youtubeDetail }) => {
  return (
    <div>
      <ExerciseDetail exerciseDetail={exerciseDetail} />
      <Youtube youtubeDetail={youtubeDetail} exerciseDetail={exerciseDetail} />
    </div>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const { id } = params;

  // Define your client code here
  const fetchDataClient = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  };

  const exerciseDetailData = await fetchDataClient(
    `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
    exerciseOptions
  );

  const youtubeDetailData = await fetchDataClient(
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
