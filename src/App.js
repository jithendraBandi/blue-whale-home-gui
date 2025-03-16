import React from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Extremities/Header";
import Footer from "./components/Extremities/Footer";
import CategoryItems from "./components/CategoryItems/CategoryItems";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/category-item/:category" element={<CategoryItems />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
