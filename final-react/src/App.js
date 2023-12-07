import React from "react";
import "./App.css";
import Home from "./Home";
import Laksha from "./laksha_aboutme";
import Jessica from "./jessica_aboutme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Neel from "./neel_aboutme";
import Sara from "./sara_aboutme";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/laksha" element={<Laksha />} />
        <Route path="/jessica" element={<Jessica />} />
        <Route path="/neel" element={<Neel />} />
        <Route path="/sara" element={<Sara />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
