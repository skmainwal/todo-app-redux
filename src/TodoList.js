import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "./action";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  const dispatch = useDispatch();

  return (
    <div className="">
      {todos.map((todo) => {
        return (
          <h2 className="float-left  border-bottom  todo">
            <span className="delete">
              <i
                className="material-icons text-danger border icon"
                onClick={() => {
                  dispatch(deleteTodo(todo.id));
                }}
              >
                close
              </i>
            </span>
            {todo.todo}
          </h2>
        );
      })}
    </div>
  );
};

export default TodoList;
