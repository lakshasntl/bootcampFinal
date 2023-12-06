import React from "react";
import "./App.css";
import Home from "./Home";
import Laksha from "./laksha_aboutme";
import Jessica from "./jessica_aboutme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Neel from "./neel_aboutme";

function App() {
  return (
    <BrowserRouter>
      <p>Hi</p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/laksha" element={<Laksha />} />
        <Route path="/jessica" element={<Jessica />} />
        <Route path="/neel" element={<Neel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
