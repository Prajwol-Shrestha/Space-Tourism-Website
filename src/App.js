import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Destinations from "./components/destination/Destinations";
import Crews from "./components/crew/Crews";
import Technologies from './components/technology/Technologies'


function App() {
  return (
    <Router> 
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={ <Home /> }/>
          <Route path="/destinations"  element={ <Destinations /> }/>
          <Route path="/crews"  element={ <Crews /> }/>
          <Route path="/technologies"  element={ <Technologies /> }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
