import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Datetime from "react-datetime";
import moment from "moment";
import "./Filter.css";

const Filter = ({
  bookings,
  setFitlteredBookingData,
}) => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [roomType, setRoomType] = useState("All");
  const [roomNo, setRoomNo] = useState("");
  
  useEffect(() => {
    const storedStartTime = localStorage.getItem("startTime");
    const storedEndTime = localStorage.getItem("endTime");
    const storedRoomType = localStorage.getItem("roomType");
    const storedRoomNo = localStorage.getItem("roomNo");
    
    if (storedStartTime) setStartTime(new Date(storedStartTime));
    if (storedEndTime) setEndTime(new Date(storedEndTime));
    if (storedRoomType) setRoomType(storedRoomType);
    if (storedRoomNo) setRoomNo(storedRoomNo);
  }, []);

  const checkInBetweenTime = (startTime, endTime, checkIn, checkOut) => {
    const start = moment(checkIn);
    const end = moment(checkOut);
    const beforeTime = moment(startTime);
    const afterTime = moment(endTime);

    return start.isBetween(beforeTime, afterTime);
  };

  const filterData = () => {
    let filteredData = bookings;

    if (startTime && endTime) {
      filteredData = filteredData.filter((booking) =>
        checkInBetweenTime(startTime, endTime, booking.checkIn, booking.checkOut)
      );
    }

    if (roomType !== "All") {
      filteredData = filteredData.filter((booking) =>
        booking.type === roomType
      );
    }

    if (roomNo) {
      filteredData = filteredData.filter((booking) =>
        booking.roomNo === roomNo
      );
    }

    setFitlteredBookingData(filteredData);

    // Store filter settings in local storage
    localStorage.setItem("startTime", startTime);
    localStorage.setItem("endTime", endTime);
    localStorage.setItem("roomType", roomType);
    localStorage.setItem("roomNo", roomNo);
  };

  const handleApply = (e) => {
    e.preventDefault();
    filterData();
  };

  const handleReset = (e) => {
    e.preventDefault();
    setStartTime("");
    setEndTime("");
    setRoomNo("");
    setRoomType("All");
    setFitlteredBookingData(bookings);

    // Clear filter settings from local storage
    localStorage.removeItem("startTime");
    localStorage.removeItem("endTime");
    localStorage.removeItem("roomType");
    localStorage.removeItem("roomNo");
  };

  return (
    <Form onSubmit={(e) => handleApply(e)} onReset={(e) => handleReset(e)}>
      <Form.Group className="form-group" controlId="startDate">
        <Form.Label className="label">Start Date & Time:</Form.Label>
        <Datetime
          value={startTime}
          onChange={(value) => setStartTime(value._d)}
          onBlur={filterData} // Call filterData when input is blurred
        />
      </Form.Group>

      <Form.Group className="form-group" controlId="endDate">
        <Form.Label className="label">End Date & Time:</Form.Label>
        <Datetime
          value={endTime}
          onChange={(value) => setEndTime(value._d)}
          onBlur={filterData} // Call filterData when input is blurred
        />
      </Form.Group>

      <Form.Group controlId="roomType">
        <Form.Label className="label">Room Type:</Form.Label>
        <Form.Control
          as="select"
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
          onBlur={filterData} // Call filterData when input is blurred
        >
          <option value="All">All</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </Form.Control>
      </Form.Group>

      <Form.Group className="filter-footer">
        <Button variant="primary" type="submit">
          Apply
        </Button>
        <Button variant="secondary" type="reset">
          Reset
        </Button>
      </Form.Group>
    </Form>      
  );
};

export default Filter;
