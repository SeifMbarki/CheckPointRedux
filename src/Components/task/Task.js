import React from "react";
import Delete from "../Delete";
import Done from "../Done";
import Edit from "../Edit";
import "./task.css";
const Task = ({ el }) => {
  return (
    <div className="taskdes" id={el.id}>
      <p> Task name : {el.name}</p>
      <Delete id={el.id} />
      <Edit id={el.id} name={el.name} />
      <Done el={el} />
    </div>
  );
};

export default Task;
