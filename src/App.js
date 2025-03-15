import React from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Extremities/Header";
import Footer from "./components/Extremities/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
