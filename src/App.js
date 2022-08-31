import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Destination from "./components/destination/Destination";

function App() {
  return (
    <Router> 
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={ <Home /> }/>
          <Route path="/destination"  element={ <Destination /> }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
