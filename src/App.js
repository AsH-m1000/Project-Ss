import React from "react";
import Home from "./Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Error from "./pages/Error";
import { Route, Routes } from "react-router-dom";
import { authentication } from "./firebase-config";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/Service" element={<Service />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
};

export default App;
