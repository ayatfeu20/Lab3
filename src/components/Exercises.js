import React, { useState, useEffect } from "react";
import { exerciseOptions, fetchData } from "../utility/fetchData";

const Exercises = ({ setBodyPart, bodyPart }) => {

  const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);
  return (
    <div className="exercises-wrapper">
      <p className="exercise-text">Different BodyParts, Different Exercises</p>
      <div className="dropdown">
        <button className="dropbtn">Categories</button>
        <div className="dropdown-content">
          {bodyParts.map((item) => (
            <p key={item}   onClick={() => setBodyPart(item)}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exercises;
