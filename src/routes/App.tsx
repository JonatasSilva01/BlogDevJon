import React from "react";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/home";

function App() {
  return (
    <React.Fragment>
        <HashRouter>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
            {/* <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} /> */}
          </Routes>
        </HashRouter>
    </React.Fragment>
  );
}

export default App;
