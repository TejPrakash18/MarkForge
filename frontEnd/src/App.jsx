import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Hero from "./components/Hero";
import MarkdownEditor from "./components/MarkdownEditor";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Hero/>}/>
        <Route path="/editor" element={<MarkdownEditor/>}/>
      </Routes>
    </Router>
  );
}

export default App;
