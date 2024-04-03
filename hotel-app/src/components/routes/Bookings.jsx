import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BookingCard from "../cards/BookingCard";
import Filter from "../Filter";
import Notification from "../Notification";

const Bookings = ({ bookings, setBookings }) => {
  // Load filtered bookings data from local storage on component mount
  const [filteredBookingsData, setFitlteredBookingData] = useState(() => {
    const storedFilteredBookingsData = JSON.parse(localStorage.getItem("filteredBookingsData"));
    return storedFilteredBookingsData || bookings;
  });

  const [startTime, setStartTime] = useState(() => localStorage.getItem("startTime") || "");
  const [endTime, setEndTime] = useState(() => localStorage.getItem("endTime") || "");
  const [roomType, setRoomType] = useState(() => localStorage.getItem("roomType") || "");
  const [roomNo, setRoomNo] = useState(() => localStorage.getItem("roomNo") || "");

  const [notifySuccess, setNotifySuccess] = useState({
    bool: false,
    message: "",
  });

  // Update local storage and filtered bookings data whenever bookings change
  useEffect(() => {
    localStorage.setItem("filteredBookingsData", JSON.stringify(filteredBookingsData));
  }, [filteredBookingsData]);

  // Handle changes to filter criteria and update local storage
  useEffect(() => {
    localStorage.setItem("startTime", startTime);
    localStorage.setItem("endTime", endTime);
    localStorage.setItem("roomType", roomType);
    localStorage.setItem("roomNo", roomNo);
  }, [startTime, endTime, roomType, roomNo]);

  return (
    <Container className="my-5">
      <Notification
        show={notifySuccess.bool}
        message={notifySuccess.message}
        variant={"success"}
        time={3}
        cb={(bool) =>
          setNotifySuccess({
            bool: bool,
            message: "",
          })
        }
      />
      <Row className="mb-5">
        <Filter
          startTime={startTime}
          setStartTime={setStartTime}
          endTime={endTime}
          setEndTime={setEndTime}
          roomType={roomType}
          setRoomType={setRoomType}
          roomNo={roomNo}
          setRoomNo={setRoomNo}
          bookings={bookings}
          filteredBookingsData={filteredBookingsData}
          setFitlteredBookingData={setFitlteredBookingData} // Keep as is
        />
      </Row>
      <Row className="justify-content-center">
        {filteredBookingsData.length !== 0 ? (
          filteredBookingsData.map((booking, index) => (
            <Col key={index} xs={12} sm={6} lg={4} className="mb-3">
              <BookingCard
                id={booking.id}
                price={booking.price}
                tip={booking.tip}
                durationHours={booking.duration}
                type={booking.type}
                amount={booking.amount}
                username={booking.guestName}
                email={booking.email}
                checkIn={booking.checkIn}
                checkOut={booking.checkOut}
                roomNo={booking.roomNo}
                bookings={bookings}
                setBookings={setBookings}
                paymentMethod={booking.paymentMethod}
                setNotifySuccess={setNotifySuccess}
              />
            </Col>
          ))
        ) : (
          <p className="text-danger text-center">No Bookings</p>
        )}
      </Row>
    </Container>
  );
};

export default Bookings;
