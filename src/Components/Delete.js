import React from "react";
import { deleteTask } from "../Redux/Action/ListTask";
import { useDispatch } from "react-redux";

const Delete = ({ id }) => {
 const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(deleteTask(id));
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Delete;
