import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import Comment from "./comment/Comment";
import { Link } from "react-router-dom";

const TodoList = ({ handleTodoOnClick }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/todo")
      .then((response) => setTodos(response.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(todos);
  return (
    <div className="todo-list__container">
      <div className="todo-list__wrapper">
        {todos.map((todo) => (
          <div key={todo.id} className="item">
            <div className="todo" onClick={handleTodoOnClick}>
              <Link to={"/detail"}>{todo.to_do_subject}</Link>
            </div>
            <div>
              <span className="task-icon">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span className="task-icon">
                <FontAwesomeIcon icon={faX} />
              </span>
            </div>
          </div>
        ))}
        {/* <Comment /> */}
      </div>

      <div>
        <Link to="/input">작성하기</Link>
      </div>
    </div>
  );
};

export default TodoList;
