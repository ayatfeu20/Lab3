import React from "react";
import Link from "next/link";
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
    <div className="about-container">
      <h1 className="about-title">About AMFitApp</h1>
      <p className="about-text">
        Welcome to AMFitApp, your ultimate fitness companion designed to help you achieve your health and wellness goals with ease and enjoyment.
      </p>
      <p className="about-text">
        At AMFitnessApp, we understand that embarking on a fitness journey can be daunting, but we're here to make it a seamless and enjoyable experience for you. Whether you're a seasoned athlete or just starting out, our app offers a comprehensive collection of exercises tailored to suit all fitness levels and preferences.
      </p>
      <p className="about-text">
        Discover a vast array of exercises meticulously curated by fitness experts, ranging from strength training and cardio workouts to flexibility routines. With our user-friendly interface and intuitive navigation, finding the perfect workout to fit your needs has never been easier.
      </p>
      <p className="about-text">
        What sets AMFitnessApp apart is our dedication to providing high-quality instructional content for each exercise. Our detailed exercise descriptions, accompanied by clear visuals and step-by-step instructions, ensure that you perform each movement with proper form and technique, minimizing the risk of injury and maximizing your results.
      </p>
      <p className="about-text">
        Whether you prefer to exercise at home, in the gym, or outdoors, our app offers the flexibility to access your favorite workouts anytime, anywhere. Say goodbye to monotonous routines and hello to variety and excitement as you explore our diverse selection of exercises designed to keep you motivated and engaged.
      </p>
      <p className="about-text">
        Empower yourself to live a healthier, happier life with AM. Embark on a journey to transform your body, mind, and soul through the power of exercise.
        <br></br>Let's make every workout count together!
      </p>
    </div>
    </Layout>
  );
};

export default About;
