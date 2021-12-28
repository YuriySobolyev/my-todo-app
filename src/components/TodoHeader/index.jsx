import React, { useRef } from "react";
import "./style.scss";

const TodoHeader = ({ addTodo }) => {
  const inputRef = useRef(null);

  const createTodo = (event) => {
    event.preventDefault();

    const todoObj = {
      id: new Date().getTime(),
      title: inputRef.current.value,
      completed: false,
    };
    //   const todoObj = {
    //     id: new Date().getTime(),
    //     title: inputRef.current.value,
    //     text: inputRef.current.value,
    //     completed: false,
    // };

    addTodo(todoObj);

    inputRef.current.value = "";
  };

  return (
    <div className="header-wrapper">
      <form onSubmit={createTodo} className="form">
        <input className="input" ref={inputRef} type="text" />
        <button className="add-todo-btn" type="submit"></button>
      </form>
    </div>
  );
};

export default TodoHeader;
