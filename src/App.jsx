// import { useState } from 'react'

//every component should be added here

import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";


function App() {
  return (
    // <>
    //   <Navbar />
    //   {/* <h1>RiderLink</h1> */}

    //   <RiderCard/>
    //   <Hero/>
    // </>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
