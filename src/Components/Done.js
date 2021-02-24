import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { doneTask } from "../Redux/Action/ListTask";

const Done = ({ el }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(doneTask(el.id));
        }}
      >
        {el.isDone == true ? "undone" : "done"}
      </button>
    </div>
  );
};

export default Done;
