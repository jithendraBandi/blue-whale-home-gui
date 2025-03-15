import React from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Extremities/Header";
import Footer from "./components/Extremities/Footer";
import Cabinets from "./components/CategoryItems/Cabinets";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cabinets" element={<Cabinets />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
