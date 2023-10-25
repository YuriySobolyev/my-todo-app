import React from "react";
import TodoItem from "../TodoItem";
import ProgressBar from "../Progress";

const TodoList = ({todos, removeTodo, editTodo,}) => {
    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;
    return (
        <div>
            <ProgressBar
                completed={completedTodos}
                total={totalTodos}/>
            <div>
                {/*<div>{completedTodos} / {totalTodos}</div>*/}
                <ul className="list_wrapper">
                    {todos.slice().reverse().map((todo, i) => {
                        return (
                            <TodoItem
                                key={i}
                                index={totalTodos - i}
                                todo={todo}
                                removeTodo={removeTodo}
                                editTodo={editTodo}
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default TodoList;
