import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import LandingScreen from './components/LandingScreen';
import HomeScreen from './components/HomeScreen';
import { Routes, Route, Link } from "react-router-dom";
import { CreateScreen } from './components/CreateScreen';
import { ShowScreen } from './components/ShowScreen';
import { ResultScreen } from './components/ResultScreen';
function App() {
  const [landing, setLanding] = useState(true)
  let screen = "here is screen"
  return (
    <div>
      {
        landing ?
        <LandingScreen setLanding={setLanding} />
      :
      <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/create" element={<CreateScreen />} />
        <Route path='/show' element={<ShowScreen />} />
        <Route path='/result' element={<ResultScreen screen={screen}/>} />
      </Routes>
      </>
}
    </div>
  );
}

export default App;
