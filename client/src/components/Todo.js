import React, { useState, useEffect } from "react";
import axios from "axios";
import Input from "./Input";
import ListTodo from "./ListTodo";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    await axios
      .get("/api/todos")
      .then((res) => {
        if (res.data) {
          setTodos(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  const deleteTodo = async (id) => {
    axios
      .delete(`/api/todos/${id}`)
      .then((res) => {
        if (res.data) {
          getTodos();
        }
      })
      .catch((err) => console.log(err));
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  return (
    <div>
      <h1>My Todo(s)</h1>
      <Input getTodos={getTodos} />
      <ListTodo todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default Todo;
