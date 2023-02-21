import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import Comment from "./comment/Comment";
import { Link } from "react-router-dom";

const TodoList = ({ handleTodoOnClick }) => {
  return (
    <div className="todo-list__container">
      <div className="todo-list__wrapper">
        <div className="item">
          <div className="todo" onClick={handleTodoOnClick}>
            Task 1
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

        <div className="item" onClick={handleTodoOnClick}>
          <div className="todo">Task 1</div>
          <div>
            <span className="task-icon">
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className="task-icon">
              <FontAwesomeIcon icon={faX} />
            </span>
          </div>
        </div>
        <Comment />
        <div className="item" onClick={handleTodoOnClick}>
          <div className="todo">Task 1</div>
          <div>
            <span className="task-icon">
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className="task-icon">
              <FontAwesomeIcon icon={faX} />
            </span>
          </div>
        </div>
        <div className="item" onClick={handleTodoOnClick}>
          <div className="todo">Task 1</div>
          <div>
            <span className="task-icon">
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className="task-icon">
              <FontAwesomeIcon icon={faX} />
            </span>
          </div>
        </div>
        <div>
          <Link to="input">작성하기</Link>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
