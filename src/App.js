import React, { useState, lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import react loader
import Loader from "react-js-loader";
// Components import using lazy loading
import NavBar from './common/NavBar';
const LandingScreen = lazy(() => import('./components/LandingScreen'))
const HomeScreen = lazy(() => import('./components/HomeScreen'))
const CreateScreen = lazy(() => import('./components/CreateScreen'))
const ShowScreen = lazy(() => import('./components/ShowScreen'))
const ResultScreen = lazy(() => import('./components/ResultScreen'))
function App() {
  const [landing, setLanding] = useState(true)
  return (
    <div>
      {
        landing ?
        <Suspense fallback={<><Loader type="bubble-top" bgColor={"#FFFFFF"} title={"bubble-top"} color={'#f7f7f7'} size={100} /></>}>
            <LandingScreen setLanding={setLanding} />
        </Suspense>
      :
      <>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<>
          <div className="text-center"><Loader type="bubble-top" bgColor={"#FFFFFF"} title={"bubble-top"} color={'#f7f7f7'} size={100} /></div>
          </>}>
            <HomeScreen />
          </Suspense>
        } />
        <Route path="/create" element={
        <Suspense fallback={<>
        <div className="text-center"><Loader type="bubble-top" bgColor={"#FFFFFF"} title={"bubble-top"} color={'#f7f7f7'} size={100} /></div>
        </>}>

          <CreateScreen />
        </Suspense>
        } />
        <Route path='/show' element={
        <Suspense fallback={<>
        <div className="text-center"><Loader type="bubble-top" bgColor={"#FFFFFF"} title={"bubble-top"} color={'#f7f7f7'} size={100} /></div>
          </>}>

          <ShowScreen />
        </Suspense>
        } />
        <Route path='/result' element={
          <Suspense fallback={<>
          <div className="text-center"><Loader type="bubble-top" bgColor={"#FFFFFF"} title={"bubble-top"} color={'#f7f7f7'} size={100} /></div>
          </>}>

            <ResultScreen />
          </Suspense>
        } />
      </Routes>
      </>
}
    </div>
  );
}

export default App;
