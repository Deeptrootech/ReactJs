import React, { useEffect, useState } from "react";
import axios from "axios";
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
import Modal from "../hooks/modalHook";

function GetTodos() {
  const [todo, setTodo] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editId, seteditId] = useState(null);
  const [editTodo, seteditTodo] = useState([]);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedIsCompleted, setEditedIsCompleted] = useState(false);

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
      })
      .catch((error) => console.log(error));
  }, []);

  const handlePost = (event) => {
    event.preventDefault();
    const payload = {
      title: event.target.title.value,
      description: event.target.description.value,
      completed: event.target.completed.value,
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
    console.log(index);
    axios
      .delete(`http://127.0.0.1:8000/api/todos/${index}/`)
      .then((response) => {
        console.log("Deleted");
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
    console.log(new_data);
    event.preventDefault();
    axios
      .patch(`http://127.0.0.1:8000/api/todos/${editdata.id}/`, new_data)
      .then((response) => {
        console.log("Edited");

        closeModal();
        const newState = todo.map((obj) =>
          obj.id === editdata.id ? response.data : obj
        );
        setTodo(newState);
      })
      .catch((error) => console.log("Error Occured: ", error));
  };
  return (
    <div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Completed</TableCell>
                <TableCell>Action</TableCell>
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
      </div>

      <form onSubmit={handlePost}>
        Title : <input type='text' name='title' />
        Description : <input type='text' name='description' />
        completed : <input type='text' name='completed' />
        <Button color='success' variant='contained' type='submit'>
          Submit
        </Button>
      </form>

      <div>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          editId={editId}
          title='Edit TODO'
          content=<form onSubmit={(event) => editRaw(event, editTodo)}>
            <input
              type='text'
              value={editedTitle}
              onChange={(event) => setEditedTitle(event.target.value)}
            />
            <input
              type='text'
              value={editedDescription}
              onChange={(event) => setEditedDescription(event.target.value)}
            />
            <input
              type='text'
              value={editedIsCompleted}
              onChange={(event) => setEditedIsCompleted(event.target.value)}
            />
            <Button color='success' variant='contained' type='submit'>
              Save
            </Button>
          </form>
        />
      </div>
    </div>
  );
}

export default GetTodos;
