import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../hooks/modalHook";
import Todoskeleton from "../Skeleton/TodoSkeleton";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormSkeleton from "../Skeleton/FormSkeleton";

function GetTodos() {
  const [isLoading, setIsLoading] = useState(true);
  const [todo, setTodo] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editId, seteditId] = useState(null);
  const [editTodo, seteditTodo] = useState([]);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedIsCompleted, setEditedIsCompleted] = useState(false);
  const [isChacked, setisChacked] = useState(false);

  const openModal = (index) => {
    axios
      .get(`http://127.0.0.1:8000/api/todos/${index}/`)
      .then((response) => {
        seteditTodo(response.data);
        setEditedTitle(response.data.title);
        setEditedDescription(response.data.description);
        setEditedIsCompleted(response.data.completed);
      })
      .catch((error) => console.log(error));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/todos/")
      .then((response) => {
        setTodo(response.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      })
      .catch((error) => console.log(error));
  }, []);

  const handlePost = (event) => {
    event.preventDefault();
    const payload = {
      title: event.target.title.value,
      description: event.target.description.value,
      completed: event.target.completed.checked,
    };
    axios
      .post("http://127.0.0.1:8000/api/todos/", payload)
      .then((response) => {
        setTodo([...todo, response.data]);
      })
      .catch((error) => console.log("Error Occured: ", error));
    event.target.reset();
  };

  const deleteRaw = (index) => {
    axios
      .delete(`http://127.0.0.1:8000/api/todos/${index}/`)
      .then((response) => {
        const updated_data = todo.filter((each_row) => each_row.id !== index);
        setTodo(updated_data);
      })
      .catch((error) => console.log("Error Occured: ", error));
  };
  const editRaw = (event, editdata) => {
    const new_data = {
      title: editedTitle,
      description: editedDescription,
      completed: editedIsCompleted,
    };
    event.preventDefault();
    axios
      .patch(`http://127.0.0.1:8000/api/todos/${editdata.id}/`, new_data)
      .then((response) => {
        closeModal();
        const newState = todo.map((obj) =>
          obj.id === editdata.id ? response.data : obj
        );
        setTodo(newState);
      })
      .catch((error) => console.log("Error Occured: ", error));
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div>
        {isLoading ? (
          <Todoskeleton />
        ) : (
          <TableContainer component={Paper} style={{ marginTop: "20px" }}>
            <Table
              sx={{ minWidth: 650 }}
              aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Title</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Description</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Completed</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {todo.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell component='th' scope='row'>
                      {row.title}
                    </TableCell>
                    <TableCell>{row.description}</TableCell>
                    {row.completed ? (
                      <TableCell>true</TableCell>
                    ) : (
                      <TableCell>false</TableCell>
                    )}
                    <TableCell>
                      <IconButton
                        aria-label='delete'
                        size='large'
                        onClick={() => openModal(row.id)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        aria-label='delete'
                        size='large'
                        onClick={() => deleteRaw(row.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
      {isLoading ? (
        <FormSkeleton />
      ) : (
        <Box
          onSubmit={handlePost}
          component='form'
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
          noValidate
          autoComplete='off'>
          <TextField
            required
            fullWidth
            id='outlined-basic'
            label='Title'
            name='title'
            variant='outlined'
            margin='normal'
          />
          <TextField
            required
            fullWidth
            id='outlined-basic'
            label='Description'
            name='description'
            variant='outlined'
            margin='normal'
          />
          <FormControlLabel
            required
            control={<Checkbox />}
            label='TaskCompleted'
            name='completed'
          />
          <Button color='success' variant='contained' type='submit'>
            Submit
          </Button>
        </Box>
      )}
      <div>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          editId={editId}
          title='Edit TODO'
          isloading={isLoading}
          content=<Box
            onSubmit={(event) => editRaw(event, editTodo)}
            component='form'
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
            noValidate
            autoComplete='off'>
            <TextField
              required
              fullWidth
              label='Title'
              variant='outlined'
              margin='normal'
              value={editedTitle}
              onChange={(event) => setEditedTitle(event.target.value)}
            />
            <TextField
              required
              fullWidth
              label='Description'
              name='description'
              variant='outlined'
              margin='normal'
              value={editedDescription}
              onChange={(event) => setEditedDescription(event.target.value)}
            />
            <FormControlLabel
              required
              control={<Checkbox />}
              label='TaskCompleted'
              name='completed'
              checked={editedIsCompleted}
              onChange={(event) => setEditedIsCompleted(event.target.checked)}
            />
            <Button color='success' variant='contained' type='submit'>
              Save
            </Button>
          </Box>
        />
      </div>
    </div>
  );
}

export default GetTodos;
