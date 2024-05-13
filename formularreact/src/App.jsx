import { useState } from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BestellungInput from "./pages/bestellungInput"; //1
import BestellungData from "./pages/bestellungData"; //2
import PersonalDataInput from "./pages/personalData"; //3
import Abschluss from "./pages/abschluss"; //4

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BestellungInput />}></Route>
        <Route path="/BestellungData" element={<BestellungData />}></Route>
        <Route
          path="/PersonalDataInput"
          element={<PersonalDataInput />}
        ></Route>
        <Route path="/Abschluss" element={<Abschluss />}></Route>
      </Routes>
    </Router>
  );
}
