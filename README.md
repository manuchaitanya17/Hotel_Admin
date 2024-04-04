# Hotel Room Management System

This project is a complete admin-facing solution for managing rooms in a hotel. It allows hotel administrators to efficiently handle room bookings, modifications, and cancellations. Below is an overview of the features and functionalities implemented in this application.

## Features

1. **Room Management**
   - Supports 3 room types with different pricing.
   - Prices are calculated on an hourly basis according to the requirements of the assignment.

2. **Booking Management**
   - Admin can book a room by providing user email, room number, start time, and end time.
   - Price calculation updates dynamically based on the selected room, start time, and end time.
   - Prevents overlapping bookings for the same room.

3. **Edit Booking**
   - Allows admins to edit booking details such as user email, room number, start time, and end time.
   - Confirmation is required for any changes made to the booking, with updated price displayed.

4. **Cancellation Policy**
   - The admin has the ability to cancel bookings with varied refund policies, and upon cancellation, the refund amount will be displayed in an alert message to confirm the cancellation with refund policies given below:
     - Full refund if the booking start time is more than 48 hours away.
     - 50% refund if the booking start time is between 24 to 48 hours.
     - No refund otherwise, but admin still has the option to cancel.

5. **View Bookings**
   - Provides a view page for admins to see all bookings, including upcoming and past ones.
   - Supports filtering by room number, room type, start time, and end time.

6. **Email Notification**
   - Sends email notifications using nodemailer module to users with booking details: name, email, room number, start time, and end time.
   - Helps users stay informed about their bookings.

7. **Responsive Design**
   - The application frontend is built as a Single Page Application (SPA), ensuring responsiveness across devices.

## Installation and Usage

1. Clone the repository to your local machine.
2. Now run the backend by following commands in terminal.

```bash
git clone https://github.com/manuchaitanya17/Hotel_Admin.git
cd backend
npm install
nodemon server.js

3. Now to run the front-end go to its folder and start the react app.\

```bash
cd ..
cd hotel-app
npm install
npm start



