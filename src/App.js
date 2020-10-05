import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import InputBar from "./InputBar";
import TodoList from "./TodoList";
import { Provider } from "react-redux";
import store from "./store";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="title">
          <h2>Todo App List</h2>
        </div>
        <div className="todos">
          <div className="container ">
            <InputBar />
            <TodoList />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
