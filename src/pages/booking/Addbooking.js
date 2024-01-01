import { Box, Button, Chip, OutlinedInput, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import TransitionAlerts from "../../services/TransitionAlerts";
import axiosapi, { axiosapiSecure } from "../../interceptor/axios";
import { baseURL } from "../../services/user.services";
import axios from "axios";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import "./AddBooking.css";
import Socket from "../notification/Socket";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function getStyles(name, roomName, theme) {
  return {
    fontWeight:
      roomName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Addbooking() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const theme = useTheme();
  const [room, setRoom] = React.useState([]);
  const [rooms, setRooms] = React.useState([]);
  const [CheckIn, setCheckIn] = React.useState(null);
  const [CheckOut, setCheckOut] = React.useState(null);
  const [nonfielderror, setNonFieldErrors] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      navigate("/login");
    } else {
      axiosapiSecure
        .get(`${baseURL}hotel/rooms/`)
        .then((response) => {
          setRooms(response.data.results);
        })
        .catch((response) => console.log(response));
    }
  }, []);

  const handleRoomChange = (event) => {
    const {
      target: { value },
    } = event;
    
    setRoom(value);
  };

  const handlePost = (event) => {
    event.preventDefault();
    const user_checkin = `${CheckIn["$d"].getFullYear()}-${
      (CheckIn["$d"].getMonth() % 12) + 1
    }-${CheckIn["$d"].getDate()}`;
    const user_checkout = `${CheckOut["$d"].getFullYear()}-${
      (CheckOut["$d"].getMonth() % 12) + 1
    }-${CheckOut["$d"].getDate()}`;

    const user_booking_data = {
      CheckInDate: user_checkin,
      CheckOutDate: user_checkout,
      room_ids: room,
    };
    axiosapiSecure
      .post(`${baseURL}hotel/bookings/`, user_booking_data)
      .then(function (response) {
        console.log(response);
        Socket.send(JSON.stringify({
          'message': "My message"
      }));
        event.target.reset();
        navigate("/booking");
      })
      .catch(function (error) {
        debugger
        setNonFieldErrors(error.response.data["non_field_errors"]);
      });
  };

  return (
    <div className='container'>
      {nonfielderror && (
        <TransitionAlerts message={nonfielderror} type='error' />
      )}
      <form onSubmit={handlePost}>
        <h1>New Booking Here</h1>
        {/* First name  */}

        {/* CheckIn Date  */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            sx={{ marginX: 1, marginTop: 3 }}
            label='CheckInDate'
            value={CheckIn}
            name='CheckInDate'
            dateFromat='yyyy-MM-dd'
            onChange={(newValue) => setCheckIn(newValue)}
          />
        </LocalizationProvider>
        {/* CheckOut Date  */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            sx={{ marginX: 1, marginTop: 3 }}
            label='CheckOutDate'
            value={CheckOut}
            name='CheckOutDate'
            dateFromat='yyyy-MM-dd'
            onChange={(newValue) => setCheckOut(newValue)}
          />
        </LocalizationProvider>
        {/* Select rooms */}
        <FormControl fullWidth variant='standard' sx={{ m: 1, minWidth: 120 }}>
          <InputLabel required id='demo-simple-select-standard-label'>
            Rooms
          </InputLabel>
          {/* <Select
            labelId='demo-simple-select-standard-label'
            id='demo-simple-select-standard'
            value={room}
            onChange={handleRoomChange}
            name='rooms'
            label='Rooms'>
            {rooms.map((each_room, index) => (
              <MenuItem key={index} value={each_room.id}>
                {each_room.room_name}
              </MenuItem>
            ))}
          </Select> */}
          <Select
            labelId='demo-multiple-chip-label'
            id='demo-multiple-chip'
            multiple
            value={room}
            onChange={handleRoomChange}
            input={<OutlinedInput id='select-multiple-chip' label='Rooms' />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value, index) => (
                  <Chip key={index} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}>
            {rooms.map((each_room, index) => (
              <MenuItem
                key={index}
                value={each_room.id}
                style={getStyles(each_room, rooms, theme)}>
                {each_room.room_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Save Button  */}
        <Box sx={{ textAlign: "center", marginY: "5%" }}>
          <Button
            color='success'
            variant='contained'
            type='submit'
            size='large'>
            Save
          </Button>
        </Box>
      </form>
    </div>
  );
}
