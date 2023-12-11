import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function GetTodos() {
  const [todo, setTodo] = useState([]);
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
      event.target.reset()
  };

  const deleteRaw = (index) => {
    console.log(index);
    axios
      .delete(`http://127.0.0.1:8000/api/todos/${index}/`)
      .then((response) => {
        console.log("Deleted");
        const updated_data = todo.filter((each_row) => each_row.id !== index)
        setTodo(updated_data);
      })
      .catch((error) => console.log("Error Occured: ", error));
  }

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
                <TableCell>Delete</TableCell>
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
                    <Button variant='outlined' startIcon={<DeleteIcon />} onClick={() => deleteRaw(row.id)}>
                      Delete
                    </Button>
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
    </div>
  );
}

export default GetTodos;
