// import { useState } from 'react'

//every component should be added here

import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RiderProfile from './pages/RiderProfile';
import Booking from './pages/Booking';
import BookingSummary from "./pages/BookingSummary";
import BookingSuccess from "./pages/BookingSuccess";
import Waiting from "./pages/Waiting";






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

        <Route
          path="/riders/:id"
          element={<RiderProfile />}
        />

        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/booking-summary" element={<BookingSummary />} />
        <Route path="/booking-success" element={<BookingSuccess />} />
        <Route path="/waiting" element={<Waiting />} />


    </Routes>
  );
}

export default App;
