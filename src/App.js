import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home, Nav, Launch, LaunchIndex, LaunchShoe } from "./components";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="launch" element={<Launch/>}>
          <Route path="/" element={<LaunchIndex />} />
          <Route path=":key" element={<LaunchShoe/>}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

const NotFound = () => {
  return (
    <h1>page not found...</h1>
  )
}

export default App;
