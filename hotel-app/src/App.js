import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/navigation/Header";
import Bookings from "./components/routes/Bookings";
import Home from "./home";
import Rooms from "./components/routes/Rooms";
import Title from "./components/Title";
import "./App.css";

const App = () => {
  const [bookings, setBookings] = useState([]);
  const location = useLocation();

  let content;
  if (location.pathname === "/") {
    content = (
      <>
        <Home />
        <br />
        <br />
        <Title title="Featured Rooms" id="room" />
        <Rooms bookings={bookings} setBookings={setBookings} />
      </>
    );
  } else if (location.pathname === "/Bookings") {
    content = (
      <>
        <Title title="Booked Rooms" id="room" />
        <Bookings bookings={bookings} setBookings={setBookings} />
      </>
    );
  } else {
    // Handle other routes, if needed
    content = null;
  }

  return (
    <>
      <Header />
      {content}
    </>
  );
};

export default App;
