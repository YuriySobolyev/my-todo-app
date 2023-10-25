<<<<<<< HEAD
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
=======
import React, {useRef} from "react";
import "./style.scss";

const TodoHeader = ({addTodo}) => {
    const inputRef = useRef(null);

    const createTodo = (event) => {
        event.preventDefault();

        const todoObj = {
            id: new Date().getTime(),
            title: inputRef.current.value,
            completed: false,
        };

        addTodo(todoObj);

        inputRef.current.value = "";
    };

    return (
        <div className="header-wrapper">
            <form onSubmit={createTodo} className="form">
                <input className="input" ref={inputRef} type="text"/>
                <button className="add-todo-btn" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path
                            d="M30,14.5H17.5V2c0-0.82861-0.67139-1.5-1.5-1.5S14.5,1.17139,14.5,2v12.5H2c-0.82861,0-1.5,0.67139-1.5,1.5s0.67139,1.5,1.5,1.5h12.5V30c0,0.82861,0.67139,1.5,1.5,1.5s1.5-0.67139,1.5-1.5V17.5H30c0.82861,0,1.5-0.67139,1.5-1.5S30.82861,14.5,30,14.5z"></path>
                    </svg>
                </button>
            </form>
        </div>
    );
>>>>>>> b5adb8d (redesign)
};

export default TodoHeader;
