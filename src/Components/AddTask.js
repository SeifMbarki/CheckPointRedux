import React from "react";
import { addTask } from "../Redux/Action/ListTask";
import { useDispatch } from "react-redux";
import { useState } from "react";

const AddTask = () => {
  const [newtask, setNewtask] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Add a new Task</h2>
      <input
        value={newtask}
        type="text"
        onChange={(e) => {
          setNewtask(e.target.value);
        }}
      />

      <button
        onClick={(e) => {
          if (newtask) {
            dispatch(addTask(newtask));
            setNewtask("");
          }
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
