import React, { useEffect, useState } from "react";
import axios from "axios";

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
  return (
    <div>
      GetTodos:
      {todo.map((data, index) => (
        <ul key={index}>
          <li>{data.title}</li>
          <li>{data.description}</li>
          {data.completed ? <li>true</li> : <li>false</li>}
        </ul>
      ))}
    </div>
  );
}

export default GetTodos;
