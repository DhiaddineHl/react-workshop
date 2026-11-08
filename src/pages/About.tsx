import React from "react";
import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div>
      About
      <button onClick={goHome}>Go home</button>
    </div>
  );
};

export default About;
