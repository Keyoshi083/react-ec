import React from "react";
import { Route, Routes } from "react-router";
import { Login, Home } from "./templates";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default Router;
