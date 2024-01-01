import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { axiosapiSecure } from "../../interceptor/axios";
import { baseURL } from "../../services/user.services";
import "./Rooms.css";

export default function Rooms() {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      navigate("/login");
    } else {
      axiosapiSecure
        .get(`${baseURL}hotel/rooms/`)
        .then((response) => setRooms(response.data.results))
        .catch((response) => console.log(response));
    }
  }, []);

  return (
    <div className='rooms_container'>
      {rooms.map((room, index) => (
        <Card key={index} sx={{ width: 345, margin: "3%" }}>
          <CardMedia
            component='img'
            alt={room.room_name}
            height='250'
            image={room.room_image}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {room.room_name}
              {room.is_available ? (
                <Button sx={{ color: "green" }} size='small'>
                  Available
                </Button>
              ) : (
                <Button sx={{ color: "red" }} size='small'>
                  NotAvailable
                </Button>
              )}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {room.room_description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
