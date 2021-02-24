import React from "react";
import { useSelector } from "react-redux";

import Task from "./task/Task";

const TaskList = () => {
  const tasks = useSelector((state) => state.taskReducer.tasks);
  const status = useSelector((state) => state.taskReducer.status);
  const search = useSelector((state) => state.taskReducer.search);
  return (
    <div>
      {tasks
        .filter((el) => (status == "done" ? el.isDone == true : 1))
        .filter((el) => (status == "undone" ? el.isDone == false : 1))
        .filter((el) =>
          el.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
        .map((el) => (
          <Task el={el} />
        ))}
    </div>
  );
};

export default TaskList;
