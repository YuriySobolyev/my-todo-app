import React from "react";
import "./style.scss";

const TodoItem = ({ todo, editTodo, removeTodo }) => {
  const handleChange = () => {
    todo.completed = !todo.completed;
    editTodo(todo);
  };

  const handleDelete = () => {
    removeTodo(todo.id);
  };

  return (
    <li className={`${todo.completed ? "item completed" : "item"}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleChange}
        className="custom-checkbox"
      />
      <p className={`${todo.completed ? "completed" : "non"}`}>{todo.title}</p>
      <button className="delete-btn" onClick={handleDelete}></button>
    </li>
  );
};

export default TodoItem;
