import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CounterOne from "./CounterOne";
import CounterTwo from "./CounterTwo";
import Landing from "./Landing";

function CommonParent() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/counterOne" element={<CounterOne />} />
        <Route path="/counterTwo" element={<CounterTwo />} />
      </Routes>
    </Router>
  );
}

export default CommonParent;
