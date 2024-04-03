import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./routes/Home";
import Meni from "./routes/Meni";
import Onas from "./routes/Onas";
import Galerija from "./routes/Galerija";
import Loka from "./routes/Loka";

export default function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meni" element={<Meni />} />
          <Route path="/onas" element={<Onas />} />
          <Route path="/galerija" element={<Galerija />} />
          <Route path="/loka" element={<Loka />} />
        </Routes>
      </div>
    </>
  );
}
