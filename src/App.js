import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './common/NavBar';
import LandingScreen from './components/LandingScreen';
import HomeScreen from './components/HomeScreen';
import { Routes, Route, Link } from "react-router-dom";
import { CreateScreen } from './components/CreateScreen';
import { ShowScreen } from './components/ShowScreen';
import { ResultScreen } from './components/ResultScreen';
function App() {
  const [landing, setLanding] = useState(true)
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
        <Route path='/result' element={<ResultScreen />} />
      </Routes>
      </>
}
    </div>
  );
}

export default App;
