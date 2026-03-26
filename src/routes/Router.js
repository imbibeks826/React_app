import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { ElementComponent } from "../../App";
import About from "../screens/About";
import Contact from "../screens/Contact";
import HomePage from "../screens/HomePage";
import Projects from "../components/Projects";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />}>
        <Route path="/about/projects" element={<Projects />} />
      </Route>
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Router;
