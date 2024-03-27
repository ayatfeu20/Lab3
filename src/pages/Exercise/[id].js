// pages/Exercise/[id].js
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ExerciseDetail from '../../components/ExerciseDetail';
import Youtube from '../../components/Youtube';
import { fetchData, exerciseOptions, youtubeOptions } from '../../utility/fetchData';

const ExercisePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [exerciseDetail, setExerciseDetail] = useState(null);
  const [youtubeDetail, setYoutubeDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const fetchExerciseData = async () => {
      try {
        const exerciseResponse = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
          exerciseOptions
        );
        console.log("Exercise Response:", exerciseResponse);
        setExerciseDetail(exerciseResponse);

        const youtubeResponse = await fetchData(
          `https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseResponse.name}`,
          youtubeOptions
        );
        console.log("YouTube Response:", youtubeResponse);
        setYoutubeDetail(youtubeResponse.contents);

        setLoading(false); // Mark loading as complete
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
        setLoading(false); // Mark loading as complete even if error occurs
      }
    };

    if (id) {
      fetchExerciseData();
    }
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!exerciseDetail || !youtubeDetail) {
    return <p>No data found</p>;
  }

  return (
    <div>
      <ExerciseDetail exerciseDetail={exerciseDetail} />
      <Youtube youtubeDetail={youtubeDetail} exerciseDetail={exerciseDetail} />
    </div>
  );
};

export default ExercisePage;
