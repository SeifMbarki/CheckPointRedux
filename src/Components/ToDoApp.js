import React from "react";
import AddTask from "./AddTask";
import Nav from "./Nav/Nav";
import TaskList from "./TaskList";

const ToDoApp = () => {
  return (
    <div>
      <Nav />
      <AddTask />
      <TaskList />
    </div>
  );
};

export default ToDoApp;
