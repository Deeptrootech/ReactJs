import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import { axiosapiSecure } from "../../interceptor/axios";
import { baseURL } from "../../services/user.services";
import "./Booking.css";

export default function Booking() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      navigate("/login");
    } else {
      axiosapiSecure
        .get(`${baseURL}hotel/bookings/`)
        .then((response) => {
          console.log(response);
          setBookings(response.data.results);
        })
        .catch((response) => console.log(response));
    }
  }, []);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <h1 style={{ width: "70%", textAlign: "center" }}>Your Bookings</h1>
        <Button
          sx={{ my: 2, display: "block" }}>
          <Link
            style={{ color: "green" }}
            to="/newbooking">
            New Booking
          </Link>
        </Button>
      </div>
      <div className='booking_container'>
        {[...bookings, ...bookings].map((booking, booking_index) => (
          <Card
            key={`Booking${booking_index}`}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: 300,
              height: 300,
              padding: "1%",
              margin: "3%",
              textAlign: "center",
              background: "linear-gradient(to right, #304352, #d7d2cc)",
            }}>
            <Typography size='small'>
              BookingId: {booking.booking_id}
            </Typography>
            RoomNumbers:
            {booking.rooms.map((room, room_index) => (
              <Typography key={`Room${room_index}`} component='div'>
                <Typography variant='h5' component='p'>
                  {room.room_name}
                </Typography>
              </Typography>
            ))}
            <CardContent>
              <Typography size='small'>
                CheckInDate: {booking.CheckInDate}
              </Typography>
              <Typography size='small'>
                CheckOutDate: {booking.CheckOutDate}
              </Typography>
              <Typography variant='body2' color='text.secondary'></Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
