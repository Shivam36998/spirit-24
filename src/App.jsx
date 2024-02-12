/** @format */

import Navbar from "./Pages/Navbar";
import Event from "./Pages/Event";

import React from "react";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Speakers from "./Pages/Speakers";

const App = () => {
  return (
    <>
      <Home />
      <Navbar />
      <About />
      <Speakers />
      <Event />
    </>
  );
};

export default App;
