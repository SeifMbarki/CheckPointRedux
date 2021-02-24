import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";
import { statusTask } from "../Redux/Action/ListTask";
import { useDispatch } from "react-redux";

const DropDown = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Sort by
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => {
              dispatch(statusTask("done"));
            }}
          >
            Done
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              dispatch(statusTask("undone"));
            }}
          >
            Undone
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              dispatch(statusTask("all"));
            }}
          >
            All
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropDown;
