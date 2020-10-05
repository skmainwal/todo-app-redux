import React, { useState } from "react";
import { addTodo } from "./action";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import "./App.css";

const InputBar = () => {
  const [todo, setTodos] = useState("");

  const dispatch = useDispatch();
  const id = shortid.generate();
  const todoSubmit = (e) => {
    e.preventDefault();
    let Todo = { id: id, todo: todo };
    dispatch(addTodo(Todo));
    setTodos("");
  };
  return (
    <form onSubmit={todoSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control inputBar"
          placeholder="Todos...."
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={todo}
          onChange={(e) => setTodos(e.target.value)}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default InputBar;
