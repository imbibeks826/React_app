import React from "react";
import { Route, Routes } from "react-router";
import About from "../screens/About/About";
import Contact from "../screens/Contact/Contact";
import HomePage from "../screens/HomePage/HomePage";
import Projects from "../components/Projects";
import InfiniteScroll from "../components/InFiniteScroll";
import Resume from "../screens/Resme/Resume";
import GithubDashboard from "../screens/GithubDashboard/GithubDashboard";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />}>
        <Route path="projects" element={<Projects />} />
      </Route>
      <Route path="/contact" element={<Contact />} />
      <Route path="/infinite-scroll" element={<InfiniteScroll />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/github-details" element={<GithubDashboard />} />
    </Routes>
  );
};

export default Router;
