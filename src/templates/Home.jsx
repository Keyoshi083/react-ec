import React from "react";
import { useLocation } from "react-router";

const Home = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

export default Home;
