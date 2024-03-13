import React, { useState } from "react";
import bannerImage from "../assets/image/fitnessimg.jpg";
import Image from "next/image";
import Exercises from "./Exercises";
import { fetchData, exerciseOptions } from "../utility/fetchData";

const Banner = ({ setExercises }) => {
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      console.log("exerData", exercisesData);
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      console.log("searchExer", searchedExercises);
      setSearch("");

      setExercises(searchedExercises);
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <div className="banner">
      <Image src={bannerImage} alt="banner-img" fill className="banner-img" />
      <div>
        <p className="banner-text">
          EXERCISING REGULARY IS THE SINGLE MOST IMPORTANT THING <br></br>
          YOU CAN DO FOR YOUR HEALTH
        </p>
      </div>
      <div className="banner-search">
        <input
          type="text"
          className="banner-input"
          placeholder="Search Exercises..."
          onChange={handleChange}
        />
        <button className="banner-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
