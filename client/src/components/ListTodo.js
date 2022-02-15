import React from "react";
import Markdown from "marked-react";

const ListTodo = ({ todos, setTodoInfo, deleteTodo }) => {
  return (
    <ul>
      {todos && todos.length > 0 ? (
        todos.map((todo) => {
          return (
            <li key={todo._id}>
              <div className="todo">
                <Markdown>{todo.action}</Markdown>
                <div></div>
                <div>
                  <i
                    className="fa-solid fa-pen-to-square"
                    onClick={() =>
                      setTodoInfo({ id: todo._id, action: todo.action })
                    }
                  ></i>
                  <i
                    className="fa-solid fa-trash"
                    onClick={() => deleteTodo(todo._id)}
                  ></i>
                </div>
              </div>
            </li>
          );
        })
      ) : (
        <li>No todo(s) left</li>
      )}
    </ul>
  );
};

export default ListTodo;
